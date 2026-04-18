// ─────────────────────────────────────────────
// firebase-init.js  (ES module — loaded with type="module")
// Initializes Firebase and exposes `db` and Firestore helpers
// on window so the plain-script app.js can use them.
// ─────────────────────────────────────────────
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js';
import {
  getFirestore, collection, addDoc, deleteDoc,
  doc, query, orderBy, onSnapshot, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js';

// ── Replace these values with your Firebase project config ──
// Firebase Console → Project Settings → Your apps → SDK setup & config
const firebaseConfig = {
    apiKey: "AIzaSyC5R_sf9zdniaU31UxCmydI23yj2ecdms4",
    authDomain: "yi-zhou-site.firebaseapp.com",
    projectId: "yi-zhou-site",
    storageBucket: "yi-zhou-site.firebasestorage.app",
    messagingSenderId: "589684045866",
    appId: "1:589684045866:web:37ce8ef8b4280b2a236b53",
    measurementId: "G-31NM5N9NRB"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// Expose everything app.js needs on window
window._firebase = {
  db,
  collection, addDoc, deleteDoc,
  doc, query, orderBy, onSnapshot, serverTimestamp
};
