// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsyJcx7KSi03F27LgGY4KD6hmrwPOYek8",
  authDomain: "service-review-anamika.firebaseapp.com",
  projectId: "service-review-anamika",
  storageBucket: "service-review-anamika.appspot.com",
  messagingSenderId: "222516895292",
  appId: "1:222516895292:web:2a9c3c804800d55dc46d39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;