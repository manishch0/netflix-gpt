// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB9XPrxbpcWrzsPStolBJKGPPAQBt-nrCY",
  authDomain: "netflix-gpt-36348.firebaseapp.com",
  projectId: "netflix-gpt-36348",
  storageBucket: "netflix-gpt-36348.appspot.com",
  messagingSenderId: "130721101292",
  appId: "1:130721101292:web:4189132aeb3aa93e6a7cc9",
  measurementId: "G-VDP1TY9SW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
