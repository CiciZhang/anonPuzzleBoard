import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDvQF-5yo3RckCip07OjF35Ht7-GD9JU9k",
    authDomain: "anonpuzzleboard.firebaseapp.com",
    databaseURL: "https://anonpuzzleboard.firebaseio.com",
    projectId: "anonpuzzleboard",
    storageBucket: "anonpuzzleboard.appspot.com",
    messagingSenderId: "520968649938",
    appId: "1:520968649938:web:59905411bf7834845e410b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase 