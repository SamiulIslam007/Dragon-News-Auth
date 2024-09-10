// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Z1WvHc7Niq4iezPAsMCwRwFA_pyRXyg",
  authDomain: "react-dragon-news-auth-cc9f4.firebaseapp.com",
  projectId: "react-dragon-news-auth-cc9f4",
  storageBucket: "react-dragon-news-auth-cc9f4.appspot.com",
  messagingSenderId: "360745173439",
  appId: "1:360745173439:web:6c51b34616656ad64aa10a",
  measurementId: "G-5MEC3LDLSJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;
