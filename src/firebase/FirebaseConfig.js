// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZMDnZF7oYUmoV0rop-XlPxaBBP_zK0gA",
  authDomain: "jobbidpro.firebaseapp.com",
  projectId: "jobbidpro",
  storageBucket: "jobbidpro.appspot.com",
  messagingSenderId: "360740496938",
  appId: "1:360740496938:web:a44b9cf4d38f72aff9c553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;