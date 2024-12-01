// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDESozFhkTuE3_T5H4e4VXkj344UOWAOY",
    authDomain: "coffee-shop-44569.firebaseapp.com",
    projectId: "coffee-shop-44569",
    storageBucket: "coffee-shop-44569.firebasestorage.app",
    messagingSenderId: "32798515036",
    appId: "1:32798515036:web:fd6b9b137208e28da42b99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);