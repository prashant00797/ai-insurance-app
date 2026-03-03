// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApQ4GxVBFKSNNYEOr4zcj0bh4463elMlA",
  authDomain: "insure-ai-75bff.firebaseapp.com",
  projectId: "insure-ai-75bff",
  storageBucket: "insure-ai-75bff.firebasestorage.app",
  messagingSenderId: "768514357626",
  appId: "1:768514357626:web:2d9a1070974a420468bec3",
  measurementId: "G-7VFNTVQJDJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
