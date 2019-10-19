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
  /*$(document).ready(function(){
      var rootRef = firebase.database().ref().child("User");
      rootRef.on("child_added",snap=>{
          //alert(snap.val());
          var name = snap.child("name").val();
          var email = snap.child("email").val();
          var msg = snap.child("message").val();
          $("#table_body").append("<tr><td>"+name+"</td><td>"+email+"</td><td>"+msg+"</td></tr>");
      });
  });*/
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
       
        var user = firebase.auth().currentUser;
        if(user.uid=='238amN1tvAWwuNBfMN8AQM8ZcjN2')
        {
            document.getElementById("lukachuri").style.display = 'block';
        }
    }
   
})