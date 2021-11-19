// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGqxKdwBMaq63xNsKkUfhKod5-j5pxQlA",
  authDomain: "quizquiz-6de18.firebaseapp.com",
  projectId: "quizquiz-6de18",
  storageBucket: "quizquiz-6de18.appspot.com",
  messagingSenderId: "1037792560910",
  appId: "1:1037792560910:web:9ec7e515ad2f829375795f",
  measurementId: "G-KCSHJ90LMN"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()