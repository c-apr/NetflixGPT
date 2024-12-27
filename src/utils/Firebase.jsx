  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC7TBa4iR-qlx5dCgezEyL1pfmycZMlvQ",
  authDomain: "netflixgpt-e712b.firebaseapp.com",
  projectId: "netflixgpt-e712b",
  storageBucket: "netflixgpt-e712b.firebasestorage.app",
  messagingSenderId: "846754977892",
  appId: "1:846754977892:web:ed24f0dc84cd6715c9a771",
  measurementId: "G-PCGRRX31YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();