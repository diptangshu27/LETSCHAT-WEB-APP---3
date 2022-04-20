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
  room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like:0,
  });
  document.getElementById("msg").value = "";
}







  function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}