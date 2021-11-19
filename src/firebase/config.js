import * as firebase from 'firebase/app';
import {getFirestore, Timestamp } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAcvvvQU-O9UNDKmkg1rUDg0JRjajq6-2M",
    authDomain: "fb-demo-try.firebaseapp.com",
    projectId: "fb-demo-try",
    storageBucket: "fb-demo-try.appspot.com",
    messagingSenderId: "461321394903",
    appId: "1:461321394903:web:d50ca3edd873705f67ae92",
    measurementId: "G-RKPTSS1XY1"
  };

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const firestoreDb = getFirestore(app);
const fireStorage = getStorage(app);
const timeStamp = Timestamp;

export { firestoreDb, fireStorage, timeStamp }