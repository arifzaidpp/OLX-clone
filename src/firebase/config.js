import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "olx-clone-3455b.firebaseapp.com",
    projectId: "olx-clone-3455b",
    storageBucket: "olx-clone-3455b.appspot.com",
    messagingSenderId: "912684951837",
    appId: "1:912684951837:web:726261d6562bf732f699f4",
    measurementId: "G-7B7RMDMN9R"
};

// Initialize Firebase, key -"1252" "AIzaSyBlDQhCn8_Jmn6oe1252SAwRuwNIA_01lUh0sY"
export default firebase.initializeApp(firebaseConfig);
