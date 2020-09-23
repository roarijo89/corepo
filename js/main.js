  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCoz5BEkapvSKbGjsJn445Q_jjGYeFEjtM",
    authDomain: "view-counter-9f930.firebaseapp.com",
    databaseURL: "https://view-counter-9f930.firebaseio.com",
    projectId: "view-counter-9f930",
    storageBucket: "view-counter-9f930.appspot.com",
    messagingSenderId: "546950557886",
    appId: "1:546950557886:web:224a2cfe2d6eb5aaa56eef",
    measurementId: "G-Z75YV05DQE"
  };
  firebase.initializeApp(config);

var msgref= firebase.database().ref('message');

document.getElementById("contactform").addEventListener("submit",submitform);

function submitform(e){
    e.preventDefault();

    // console.log(123);
    var developername = getInputVal('developername');
    var email = getInputVal('email');
    var tweakname = getInputVal('tweakname');
    var packageid = getInputVal('packageid');
    var message = getInputVal('textarea');

    saveMessages(name, email, message, tweakname, packageid);

    //show alert

    document.querySelector(".alert").style.display = 'block';

    //hide alert after 3 sec
    setTimeout(function(){
      document.querySelector(".alert").style.display = 'none';
    },3,0000);

    //clear
    document.getElementById('contactform').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessages(developername, email, message, tweakname, packageid){
  var newMessageRef = msgref.push();
  newMessageRef.set({
    developername : developername,
    email : email,
    tweakname : tweakname,
    packageid : packageid,
    message : message
  });
}