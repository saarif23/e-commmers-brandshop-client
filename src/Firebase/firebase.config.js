// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTNIWHivyiaPyB2fgCnmd7SQt3DR8w-48",
    authDomain: "brand-shop-43c80.firebaseapp.com",
    projectId: "brand-shop-43c80",
    storageBucket: "brand-shop-43c80.appspot.com",
    messagingSenderId: "1011246158286",
    appId: "1:1011246158286:web:9b52e19411a9de832bdb9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;