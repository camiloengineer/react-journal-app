import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDG_9yCb0oFlTpbj1_BySlQnDCCLmAwrEY",
    authDomain: "react-app-cursos-6f585.firebaseapp.com",
    projectId: "react-app-cursos-6f585",
    storageBucket: "react-app-cursos-6f585.appspot.com",
    messagingSenderId: "492628734185",
    appId: "1:492628734185:web:3bc0060caf0fa6acf7c078"
  };

  firebase.initializeApp(  firebaseConfig );

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }