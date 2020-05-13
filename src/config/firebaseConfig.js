import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyDBq4izIV1cYIx1fYuxU6sjxJvnXHZ-VSM",
    authDomain: "test-140c8.firebaseapp.com",
    databaseURL: "https://test-140c8.firebaseio.com",
    projectId: "test-140c8",
    storageBucket: "test-140c8.appspot.com",
    messagingSenderId: "53559074282",
    appId: "1:53559074282:web:3350b4b2f1db05b4b9a693",
    measurementId: "G-NMQ411T1D2"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
