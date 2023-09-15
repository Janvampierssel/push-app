// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH1OdzLkKQI1ry5oHD0I5m73xsacTWyQQ",
  authDomain: "push-app-493a9.firebaseapp.com",
  projectId: "push-app-493a9",
  storageBucket: "push-app-493a9.appspot.com",
  messagingSenderId: "134845556929",
  appId: "1:134845556929:web:ef79e3e86133ff9e36cc40",
  measurementId: "G-3JBK7XHZSR",
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Look into environment variables and hiding the API key
// so that it is not visible from say the Github repo.
