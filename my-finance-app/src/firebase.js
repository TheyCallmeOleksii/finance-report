// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

/* 🔐 AUTH */
export const auth = getAuth(app);

/* 🗄️ FIRESTORE */
export const db = getFirestore(app);

/* 🔑 LOGIN */
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

/* 🚪 LOGOUT */
export const logout = async () => {
  await signOut(auth);
};

/* 👀 WATCH USER */
export const watchUser = (callback) => {
  return onAuthStateChanged(auth, callback);
};
