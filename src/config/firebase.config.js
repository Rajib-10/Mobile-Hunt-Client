// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsDWXjzlIQ-NTVtaR3gNvGKsUVPGn-dFM",
  authDomain: "mobile-hunt.firebaseapp.com",
  projectId: "mobile-hunt",
  storageBucket: "mobile-hunt.appspot.com",
  messagingSenderId: "644118529702",
  appId: "1:644118529702:web:7d7ce55c97d44f7a329667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
