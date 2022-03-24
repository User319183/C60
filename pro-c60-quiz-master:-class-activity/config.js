import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA04Lkp4r5ahVP5r8IhLqB5iJ3HSLNyzB4",
    authDomain: "buzzerapp-cb315.firebaseapp.com",
    databaseURL: "https://buzzerapp-cb315-default-rtdb.firebaseio.com",
    projectId: "buzzerapp-cb315",
    storageBucket: "buzzerapp-cb315.appspot.com",
    messagingSenderId: "837341849284",
    appId: "1:837341849284:web:6dae3e0afbd0f5e960cb91",
    measurementId: "G-4KF8BSNMXL"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()