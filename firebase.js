// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import {getFirestore, collection, getDocs} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLgwjq6WVQqkytplX6iXGz3Sfwb1-AE2k",
  authDomain: "jimojiecommerceapp.firebaseapp.com",
  projectId: "jimojiecommerceapp",
  storageBucket: "jimojiecommerceapp.firebasestorage.app",
  messagingSenderId: "462271713660",
  appId: "1:462271713660:web:d4ac595bd252cc3f3894f9",
  measurementId: "G-4Q0Y5MC25S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore()
export const users = collection(db, "users")
export const doc = getDocs(users)
// const firestore = 