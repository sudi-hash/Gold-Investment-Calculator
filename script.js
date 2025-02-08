// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu_QrCeKAL_vS-zMK7TkOjynlzcCpIawI",
  authDomain: "gold-investment-calc.firebaseapp.com",
  projectId: "gold-investment-calc",
  storageBucket: "gold-investment-calc.firebasestorage.app",
  messagingSenderId: "403540655298",
  appId: "1:403540655298:web:f05c054510f7fcbd38cf5b",
  measurementId: "G-FXVG3HPK0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
