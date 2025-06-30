// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK9OQ3x4ab1vZHU2nIvulTH9Je5ScaNog",
  authDomain: "netflix-gpt-04-2005.firebaseapp.com",
  projectId: "netflix-gpt-04-2005",
  storageBucket: "netflix-gpt-04-2005.firebasestorage.app",
  messagingSenderId: "411644235028",
  appId: "1:411644235028:web:9ae8472ee862158fe24601",
  measurementId: "G-P79ZV6J8S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
