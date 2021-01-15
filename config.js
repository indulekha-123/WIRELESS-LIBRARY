import * as firebase from 'firebase'
require ('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyBvHgs-Jd9LGZYMDQLnbjvRyoD8Y-mSsqY",
    authDomain: "willy-app-fc26f.firebaseapp.com",
    projectId: "willy-app-fc26f",
    storageBucket: "willy-app-fc26f.appspot.com",
    messagingSenderId: "1079818631991",
    appId: "1:1079818631991:web:c4746e470451fef917f8b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore ();



