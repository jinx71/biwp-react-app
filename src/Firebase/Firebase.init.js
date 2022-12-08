// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvwz6smSg9xNPCUEPjJCZTHY7vBlEwmAc",
    authDomain: "biwp-react-app.firebaseapp.com",
    projectId: "biwp-react-app",
    storageBucket: "biwp-react-app.appspot.com",
    messagingSenderId: "667990902535",
    appId: "1:667990902535:web:a48c8b67a8363dff3867a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);