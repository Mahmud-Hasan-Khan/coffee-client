// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9jycWt8HfpV99mKQEh3D_Hz62oc0hAAE",
    authDomain: "coffee-store-c24cc.firebaseapp.com",
    projectId: "coffee-store-c24cc",
    storageBucket: "coffee-store-c24cc.appspot.com",
    messagingSenderId: "930323133688",
    appId: "1:930323133688:web:042d326c7b3c17b339770d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;