// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//amazon-clone-project

//const firebase = require('firebase/app');
//import firebase from 'firebase/app';
//require('firebase/firestore');
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxHGl8L90paS7ss4ZXvu6leRJLQo85AxU",
  authDomain: "clone-project-72329.firebaseapp.com",
  projectId: "clone-project-72329",
  storageBucket: "clone-project-72329.appspot.com",
  messagingSenderId: "930874549159",
  appId: "1:930874549159:web:e18dec5058fe6bf0b9cc82",
  measurementId: "G-K3CZBJF48P"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //returns an instance of the Firebase Firestore database. 
const auth = firebase.auth(); //returns an instance of the Firebase Authentication service.

export { db, auth };