// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_KEY } from "../constant/common";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "portfolio-projects-df181.firebaseapp.com",
  projectId: "portfolio-projects-df181",
  storageBucket: "portfolio-projects-df181.firebasestorage.app",
  messagingSenderId: "192154498151",
  appId: "1:192154498151:web:9daaff851044d5e63450c2",
  measurementId: "G-SX1MGTGV9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
