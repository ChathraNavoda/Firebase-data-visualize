// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Lb9p-xvt6JX4i8IXwf_dfkvCz1w7byw",
  authDomain: "raspidatachart.firebaseapp.com",
  projectId: "raspidatachart",
  storageBucket: "raspidatachart.appspot.com",
  messagingSenderId: "328160073233",
  appId: "1:328160073233:web:0a5f764fbfd6213dbc83b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export const productCollection = db.ref("data/product");

export default firebase;