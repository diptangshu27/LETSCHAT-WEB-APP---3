//ADD YOUR FIREBASE LINKS HERE-kwitter
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArsVPpsIzXtLsBUuTTsAEz2D7iSxGKlCE",
  authDomain: "kwitter-webapp-fff04.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-fff04-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-fff04",
  storageBucket: "kwitter-webapp-fff04.appspot.com",
  messagingSenderId: "459052827364",
  appId: "1:459052827364:web:e78dc81fa1eaa7101722f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"; 
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
