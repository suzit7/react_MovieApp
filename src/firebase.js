// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyActJsWz0PK1Cc18jD6gz1_BWqlw043Dxg",
  authDomain: "nepflixapp-e7847.firebaseapp.com",
  projectId: "nepflixapp-e7847",
  storageBucket: "nepflixapp-e7847.appspot.com",
  messagingSenderId: "639254711778",
  appId: "1:639254711778:web:1e6e4e2a389986b4837dbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); //For database

const auth = getAuth(); // Authetication module

export const Signup = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password); //Creating signup function using auth module
};

export const Login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password); //Creating signup function using auth module
};

export function logout() {
  return signOut(auth);
}

//custom hook

export const useAuth = () => {
  const [currentUser, setCurrentuser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentuser(user));
    return unsub;
  }, []);

  return currentUser;
};
