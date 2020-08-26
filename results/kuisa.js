// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA0bSfBNKA4Y3oDbiorSA8dYrI6X7thQpI",
    authDomain: "statistika-smp.firebaseapp.com",
    databaseURL: "https://statistika-smp.firebaseio.com",
    projectId: "statistika-smp",
    storageBucket: "statistika-smp.appspot.com",
    messagingSenderId: "221055005685",
    appId: "1:221055005685:web:6704d25858af96560426bc",
    measurementId: "G-SD240GBRWE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var data = database.ref('/statistika-smp/kuis-a');
data.on('value', function(snapshot) {
  console.log(snapshot)
});

