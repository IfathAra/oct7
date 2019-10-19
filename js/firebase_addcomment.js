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
      var firebaseRef = firebase.database().ref('User');
      firebaseRef.push(data);
       // window.alert("working");
  }
  function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('comments').value = "";
}

























  /*var getname = document.getElementById("txt");
  var getmail = document.getElementById("email");
  var getmsg = document.getElementById("msg");
  var sumbitBtn = document.getElementById("submitBtn");

function submitClick()
{
    // var userString = "User" + integer;
    // var firebaseRef = firebase.database().ref(userString);
 
     window.alert("HI");
    var firebaseRef = firebase.database().ref("User");
    var name = getname.value;
    var email = getmail.value;
    var message = getmsg.value;
    var data = {
        name:name,
        email:email,
        message :message
    }
    firebaseRef.push(data,finished);
}
    function finished(error)
    {
        if(error)
        {
           window.alert(error.message);
        }else{
           window.alert('Data Saved!');
        }
    }
*/
/*function gettxts()
{
    window.alert("Hey!");
    var ref = database.ref("User");
    ref.on("value",gotData,errData);
    function gotData(data){
        var tin = data.val();
        var keys = Object.keys(tin);
       // console.log(keys);
        for(var i=0;i<keys.length;i++){
            var key = keys[i].key;
            var fruit = tin[key].tin;
          //  console.log(key,fruit);
          var li = createElement('li',key+': '+fruit);
          li.parent('scorelist');
        }
    }
}*/