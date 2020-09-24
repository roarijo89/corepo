// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjWZ_UR2yQM_ZrjTsKI5uT-lL_MnfSHbU",
    authDomain: "genial-analyzer-187207.firebaseapp.com",
    databaseURL: "https://genial-analyzer-187207.firebaseio.com",
    projectId: "genial-analyzer-187207",
    storageBucket: "genial-analyzer-187207.appspot.com",
    messagingSenderId: "699782137879",
    appId: "1:699782137879:web:f15fd686a982e6d45b3452"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//create short calls for firebase auth instances
const auth = firebase.auth();
const analytics = firebase.analytics();