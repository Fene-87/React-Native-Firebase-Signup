// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwV1O7N6c6GEKZgN7wryGDz9bA17abDSM",
  authDomain: "sk-inventory-51a6a.firebaseapp.com",
  projectId: "sk-inventory-51a6a",
  storageBucket: "sk-inventory-51a6a.appspot.com",
  messagingSenderId: "468989228177",
  appId: "1:468989228177:web:b7e27204e3b6cf5051fb30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);