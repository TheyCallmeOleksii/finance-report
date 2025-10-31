// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcat2ld6MtW6PJhkAPNib96lhJ_tJXtyI",
  authDomain: "moneytrackerbyoleksiitiabut.firebaseapp.com",
  projectId: "moneytrackerbyoleksiitiabut",
  storageBucket: "moneytrackerbyoleksiitiabut.firebasestorage.app",
  messagingSenderId: "273627577543",
  appId: "1:273627577543:web:67341b6a4b73c43d5d52e2",
  measurementId: "G-RPKTSD1VY9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Функція входу через Google
export const loginWithGoogle = () => signInWithPopup(auth, provider);

// Функція виходу
export const logout = () => signOut(auth);

// Відслідковування користувача
export const watchUser = (callback) => onAuthStateChanged(auth, callback);
