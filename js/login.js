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
 // window.alert("Asi ki?");
  firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(function(user){
    if(user){
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
        var user = firebase.auth().currentUser;
        if(user!=null)
        {
            var email_id = user.email;
            var ev = user.emailVerified;
            if(ev)
            {
                document.getElementById("verify_btn").style.display="none";
            }
            else
            {
                document.getElementById("verify_btn").style.display="block";
            }
            document.getElementById("user_para").innerHTML = "Welcome User :"+email_id+"<br>Verified : "+ev;
        }
    }
    else
    {
        document.getElementById("user_para").innerHTML = "No Currrent User :";
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block"; 
    }
})
function login()
{
    
    var useremail =document.getElementById("inputEmail").value;
    var userpass = document.getElementById("inputPassword").value;
    window.alert("Working"+useremail+" "+userpass);
   firebase.auth().signInWithEmailAndPassword(useremail, userpass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error"+errorMessage);
    // ...
  });
}
/*function creat_acc()
{
    var useremail =document.getElementById("inputEmail").value;
    var userpass = document.getElementById("inputPassword").value;
    window.alert("Working in Creat acc"+useremail+" "+userpass);
   firebase.auth().createUserWithEmailAndPassword(useremail, userpass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error"+errorMessage);
    // ...
  });
}*/
function creat_acc()
{
    var useremail =document.getElementById("inputEmail").value;
    var userpass = document.getElementById("inputPassword").value;
    window.alert("Working in Creat acc"+useremail+" "+userpass);
   firebase.auth().createUserWithEmailAndPassword(useremail, userpass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error"+errorMessage);
    // ...
  });
    window.alert("HI");
    var firebaseRef = firebase.database().ref("RegUser");
    var user1stname = getElementById("firstName").value;
    var user2ndname = getElementById("lastName").value;
    var useraddress = getElementById("house_address").value;
    //var user2ndname = getElementById("lastName");
    var usermob = getElementById("mobile_Number").value;
    
    var data = {
        fname:user1stname,
        lname:user2ndname,
        adress:useraddress,
        mobile:usermob,
        email:useremail
    }
    firebaseRef.push(data,finished);
    function finished(error)
    {
        if(error)
        {
           window.alert(error.message);
        }else{
           window.alert('Data Saved!');
        }
    }
   
}
function logout()
{
    firebase.auth().signOut();
}
function send_verication()
{
    var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  window.alert("Verification Sent!")
}).catch(function(error) {
  // An error happened.
  window.alert("Error"+error.message);
});
}
function  password_reset()
{
    var auth = firebase.auth();
    var emailAddress = document.getElementById("inputEmail").value;;
    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      window.alert("Reset Email Sent!")
    }).catch(function(error) {
      // An error happened.
      window.alert("Error"+error.message);
    }); 
}