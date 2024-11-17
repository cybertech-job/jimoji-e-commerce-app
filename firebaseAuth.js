// firebaseAuth.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"

// Function to sign up user and store extra details in Firestore
export const signUpWithEmail = async (email, password, username, phone) => {
  // try {
  //   // Sign up with Firebase email and password
  //   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //   const { uid } = userCredential.user;

  //console.log(userCredential)
    
  //   // Store extra details in Firestore under the user's UID
  //   await firestore().collection('users').doc(uid).set({ username, phone });

  //   return uid; // Return user ID after successful registration
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};
