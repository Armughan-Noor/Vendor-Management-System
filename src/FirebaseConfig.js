/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs5xwwz7OJyXbLM0-BDZnWaIYojU_KUNs",
  authDomain: "vendor-app-management.firebaseapp.com",
  projectId: "vendor-app-management",
  storageBucket: "vendor-app-management.appspot.com",
  messagingSenderId: "313517430679",
  appId: "1:313517430679:web:32388721cc73aee39c16d2",
  measurementId: "G-LJX71D0DV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};