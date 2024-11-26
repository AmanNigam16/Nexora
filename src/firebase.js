import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (already added)
const firebaseConfig = {
  apiKey: "AIzaSyBfckRyUWCRf3b3h9VXz84HV1n5hLBB7qM",
  authDomain: "nexora-f25dc.firebaseapp.com",
  projectId: "nexora-f25dc",
  storageBucket: "nexora-f25dc.appspot.com",
  messagingSenderId: "390908593272",
  appId: "1:390908593272:web:2f48ea7bb10fa2108f598d",
  measurementId: "G-D69TDEMCHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
