// Configurazione Firebase - BlackVan
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEKQKKJxHXHim2tCQ19BAAbUZGG7b6JTk",
  authDomain: "fpblackvan.firebaseapp.com",
  projectId: "fpblackvan",
  storageBucket: "fpblackvan.firebasestorage.app",
  messagingSenderId: "1049362751025",
  appId: "1:1049362751025:web:60045e9ceef817a0d4bf10",
  measurementId: "G-Y340YZ313T"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, ref, set, push, onValue, auth, signInWithEmailAndPassword };