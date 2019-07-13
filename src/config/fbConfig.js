import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase

var config = {
    apiKey: "AIzaSyA07wlKQjlHkkredZIF2bWfa6SA722Xth0",
    authDomain: "galimaxeggs.firebaseapp.com",
    databaseURL: "https://galimaxeggs.firebaseio.com",
    projectId: "galimaxeggs",
    storageBucket: "",
    messagingSenderId: "99471038682",
    appId: "1:99471038682:web:e92bc67e99bc310a"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;