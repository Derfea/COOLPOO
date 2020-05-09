import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
    apiKey: "AIzaSyCW-EWeONZBXoKynWNhdlTp0WPSKmSzBoI",
    authDomain: "begoodtoourwebsite.firebaseapp.com",
    databaseURL: "https://begoodtoourwebsite.firebaseio.com",
    projectId: "begoodtoourwebsite",
    storageBucket: "begoodtoourwebsite.appspot.com",
    messagingSenderId: "869672977403",
    appId: "1:869672977403:web:335ddb9ddc170b6242015e",
    measurementId: "G-W9JC2S422N"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();
export default firebase;
