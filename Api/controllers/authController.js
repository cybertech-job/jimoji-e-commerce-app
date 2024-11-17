const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createTokenUser } = require('../utils');
const admin = require('../firebaseAdmin'); 
const nodemailer = require('nodemailer');

// Function to generate a six-digit OTP
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();  // 4-digit OTP
};

// Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
  service: 'gmail', // Change to your email provider if needed
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // Your email password or app password
  },
});

const register = async (req, res) => {
  const { email, name, password, phone } = req.body;

  let firebaseUser = await admin.auth().getUserByEmail(email);

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';
  const firebaseUID =  firebaseUser.uid
  const otp = generateOTP()

  const user = await User.create({ name, email, firebaseUID, password, role, phone, otp })
  const mailOptions = {
    from: process.env.EMAIL,
    to: email, // Recipient email
    subject: 'Verify Your Email - OTP',
    text: `Your OTP for email verification is: ${otp}`,
  }

  await transporter.sendMail(mailOptions);
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const verifyOtp = async (req, res) => {
  const { otp } = req.body;

  try {
    const user = await User.findOne({ otp });

    if (!user) {
      return res.status(400).json({ message: 'Invalid OTP. Please try again.' });
    }

    user.verified = true;
    await user.save();
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({ res, user: tokenUser });
    res.status(200).json({ user: tokenUser,  message: 'OTP verified successfully!'});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password');
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};
const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

module.exports = {
  register,
  login,
  logout,
  verifyOtp,
};
