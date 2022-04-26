// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdWiwob6lPBTzBtes2JiiQnhjKyTN4g3A",
  authDomain: "fireblog-app-30f92.firebaseapp.com",
  projectId: "fireblog-app-30f92",
  storageBucket: "fireblog-app-30f92.appspot.com",
  messagingSenderId: "213444736103",
  appId: "1:213444736103:web:c8e90518ca8fbf93e010c2",
  measurementId: "G-EHWBXM38ZV"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
