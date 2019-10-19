window.alert("HI");
var firebaseConfig = {
    apiKey: "AIzaSyDqlU9zj_y6WOl57lu15qtnE7cyTZkc-e4",
    authDomain: "cuber-s-choice.firebaseapp.com",
    databaseURL: "https://cuber-s-choice.firebaseio.com",
    projectId: "cuber-s-choice",
    storageBucket: "cuber-s-choice.appspot.com",
    messagingSenderId: "575698261917",
    appId: "1:575698261917:web:7c9a847b22da5b180e0174"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var getname = document.getElementById("txt");
var getmail = document.getElementById("inputEmail");"inputPassword"
var password = document.getElementById("inputPassword");
var getmsg = document.getElementById("msg");
//var sumbitBtn = document.getElementById("submitBtn");

firebase.auth().createUserWithEmailAndPassword(getmail, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
    // ...
  });

function submitClick()
{
  //window.alert("HI");
    var firebaseRef = firebase.database().ref();
    var name = getname.value;
    var email = getmail.value;
    var message = getmsg.value;
    firebaseRef.child("user1:").set({
        name:name,
        email:email,
        message :message

    });
}