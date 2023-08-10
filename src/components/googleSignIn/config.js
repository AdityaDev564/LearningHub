// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn3F3ZjvlPc1GJF_Bc_pPO25Pkh5okaI0",
  authDomain: "learninghub-133b3.firebaseapp.com",
  projectId: "learninghub-133b3",
  storageBucket: "learninghub-133b3.appspot.com",
  messagingSenderId: "582891363930",
  appId: "1:582891363930:web:dafabe68855bd0a26a0263",
  measurementId: "G-RR70458B0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
