//import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaD3kfG9PNWuu9LkpPWkoDxWiRaJudOVc",
  authDomain: "fir-85876.firebaseapp.com",
  projectId: "fir-85876",
  storageBucket: "fir-85876.appspot.com",
  messagingSenderId: "963668077548",
  appId: "1:963668077548:web:f0714e8e9ce6e3f5e02ec9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
