const stripe = require('stripe')(process.env.STRIPE_SECRET)
const stripeController = async (req, res) => {
  try {
    let { amount, name } = req.body;
    // Simple validation
    if (!amount || !name)
      return res.status(400).json({ message: "All fields are required" });
    amount = parseInt(amount);

    // Initiate payment
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "usd",
      payment_method_types: ["card"],
      metadata: { name },
    });
    // Extracting the client secret 
    const clientSecret = paymentIntent.client_secret;

    // Sending the client secret as response
    res.json({ message: "Payment initiated", clientSecret });
  } catch (err) {
    // Catch any error and send error 500 to client
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  stripeController,
};