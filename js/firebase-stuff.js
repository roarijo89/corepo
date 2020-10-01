// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDh01Mb46NET-5vGG4c0ZF18yoNvTfwgqs",
    authDomain: "cocox-47bc2.firebaseapp.com",
    databaseURL: "https://cocox-47bc2.firebaseio.com",
    projectId: "cocox-47bc2",
    storageBucket: "cocox-47bc2.appspot.com",
    messagingSenderId: "355236623984",
    appId: "1:355236623984:web:ef2ae25085cfd31bb9a6b5",
    measurementId: "G-WE88TQWS83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//create short calls for firebase auth instances
const auth = firebase.auth();
const analytics = firebase.analytics();