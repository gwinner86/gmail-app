// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6yrnkID9r3JLa3ad8NWy_HDiANekT99Y",
  authDomain: "app-bf0f9.firebaseapp.com",
  projectId: "app-bf0f9",
  storageBucket: "app-bf0f9.appspot.com",
  messagingSenderId: "696357220721",
  appId: "1:696357220721:web:0a1060eaa4184f031e86d0",
  measurementId: "G-6J30SLWZ56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();


export {db,provider}