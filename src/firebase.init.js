// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOTEpaobCMWYYu84HSQCKTiALyFYOwxpQ",
    authDomain: "car-warehouse-1d5d4.firebaseapp.com",
    projectId: "car-warehouse-1d5d4",
    storageBucket: "car-warehouse-1d5d4.appspot.com",
    messagingSenderId: "959007920466",
    appId: "1:959007920466:web:a3ad8bedf377819eb82a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;