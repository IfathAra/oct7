// Your web app's Firebase configuration
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
  var mainName = document.getElementById("name");
  var mainMail = document.getElementById("email");
  var mainText = document.getElementById("comments");
  var submitBtn =document.getElementById(submitBtn);
  function submitClick()
  {
    
      var name=mainName.value;
      var mail=mainMail.value;
      var msg=mainText.value;
      var data={
          name: name,
          mail: mail,
          msg: msg
      }
      var firebaseRef = firebase.database().ref('Msg');
      firebaseRef.push(data);
        //window.alert("working");
  }
  $(document).ready(function(){
    var rootRef = firebase.database().ref().child("Msg");
    rootRef.on("child_added",snap=>{
        //alert(snap.val());
        var name = snap.child("name").val();
        var email = snap.child("mail").val();
        var msg = snap.child("msg").val();
        $("#table_body").append("<tr><td><font size ='5'face ='arial'color='blue '>"+name+" </font><br>"+email+"</td><td>"+msg+"</td></tr>");
        // $("#table_body").append("<tr><td><font size ='5'face ='arial'color='blue '>"+name+" </font></td><td>"+email+"</td><td>"+msg+"</td></tr>");
        
    });
});
//   database =firebase.database();
//   var ref = database.ref('Msg');
//   ref.on('value',gotData,errData);
// function gotData(data){
// //console.log(data.val());
// var scores = data.val();
// var keys = Object.keys(scores);
// console.log(keys);
// for(var i=0;i<keys.length;i++)
// {
//     var k = keys[i];
//     var name = scores[k].name;
//     var mail = scores[k].mail;
//     var msg = scores[k].msg;
//    // console.log(name,mail,msg);
//    var li = createElement('li',name+' : '+mail+' : '+msg);
//    li.parent('scorelist');
// }
// }
// function errData(err){
//     console.log('Error!');
//     console.log(err);
// }