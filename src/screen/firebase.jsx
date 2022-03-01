import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCGw4TkXqDRaVM_vPJ8pW7cW3BS9kGdn7U",
    authDomain: "date-of-birth-266b9.firebaseapp.com",
    projectId: "date-of-birth-266b9",
    storageBucket: "date-of-birth-266b9.appspot.com",
    messagingSenderId: "173848439921",
    appId: "1:173848439921:web:5bf3d0ac34b098cb733fd0",
    measurementId: "G-9K6N2FZG2J"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export {
    auth,
    app,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    provider

}



