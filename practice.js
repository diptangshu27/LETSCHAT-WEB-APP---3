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

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose : "adding user"})
  }