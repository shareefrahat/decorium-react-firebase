// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0DCTMY3oBjrzyaGqyc9k9MyUX3O_4QaI",
  authDomain: "decorium-react-firebase.firebaseapp.com",
  projectId: "decorium-react-firebase",
  storageBucket: "decorium-react-firebase.appspot.com",
  messagingSenderId: "387518653430",
  appId: "1:387518653430:web:8300795cdd24489e5e5dd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
