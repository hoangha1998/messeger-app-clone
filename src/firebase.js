import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyDvwyZin5KJk4cmmxQq7liIK-lgGBIEoVk",
    authDomain: "facebook-messenger-clone-1572.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-1572.firebaseio.com",
    projectId: "facebook-messenger-clone-1572",
    storageBucket: "facebook-messenger-clone-1572.appspot.com",
    messagingSenderId: "450525440717",
    appId: "1:450525440717:web:6b713d2017e313cec51784",
    measurementId: "G-20VB1CVJGM"
  }
);

const db = firebaseApp.firestore();

export  default db;