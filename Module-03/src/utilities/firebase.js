// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuUp5XbP6AJFOEEN5TocoL7Kwqpxup30c",
  authDomain: "hello-form-a994d.firebaseapp.com",
  projectId: "hello-form-a994d",
  storageBucket: "hello-form-a994d.appspot.com",
  messagingSenderId: "1029127746013",
  appId: "1:1029127746013:web:b7cd0bc4930172f384c634",
  measurementId: "G-W7J7JBRM24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
