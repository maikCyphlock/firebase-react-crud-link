import  firebase from "firebase/app";
import  "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fb = firebase.initializeApp({
  apiKey: "AIzaSyBoN00JQvlempUwnc2cn0mqu0z1KH8p_vQ",
  authDomain: "gatorunner-eacc7.firebaseapp.com",
  databaseURL: "https://gatorunner-eacc7.firebaseio.com",
  projectId: "gatorunner-eacc7",
  storageBucket: "gatorunner-eacc7.appspot.com",
  messagingSenderId: "658824922194",
  appId: "1:658824922194:web:229c9b4ee0c99d351ccb8b",
  measurementId: "G-G9S4D40S3H"
});


export const db =firebase.firestore(fb);;
