import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB08zZXlHPhL6eOMjisdB1L2Pzvr04OXKo",
  authDomain: "module-20-329fc.firebaseapp.com",
  projectId: "module-20-329fc",
  storageBucket: "module-20-329fc.appspot.com",
  messagingSenderId: "125121211466",
  appId: "1:125121211466:web:c81801808385df6c5e4ab3",
  measurementId: "G-ZWNQY1V51P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
