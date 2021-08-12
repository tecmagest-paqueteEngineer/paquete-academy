import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2wqpmq4jcRj0nSxvOkHr4MAtkz0JgFtQ",
    authDomain: "paquetacademy.firebaseapp.com",
    projectId: "paquetacademy",
    storageBucket: "paquetacademy.appspot.com",
    messagingSenderId: "258058374420",
    appId: "1:258058374420:web:1ae922db35537241018601",
    measurementId: "G-ET8FN98W84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage; 