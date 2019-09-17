var firebaseConfig = {
    apiKey: "AIzaSyCN9CMRqr_38FdS0gvYDzUXUfbeqphCneM",
    authDomain: "trainapp-bbf6f.firebaseapp.com",
    databaseURL: "https://trainapp-bbf6f.firebaseio.com",
    projectId: "trainapp-bbf6f",
    storageBucket: "",
    messagingSenderId: "353492341641",
    appId: "1:353492341641:web:92e3c9dda931916052c758"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Create a variable to reference the database
  var database = firebase.database();
//on click function to add a train 
  $("#add-train-btn").on("click", function (event) {
    event.preventDefault();
//get values from your form 4 values one for every input
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    console.log(destination);
    var firstTrainTime = $("#firsttraintime-name-input").val().trim();
    var frequency = $("#frequency-name-input").val().trim();

//create an object with all your new trains info so every value you pull up above
newTrain = {
    tName: trainName,
    dest: destination,
    fTrain: firstTrainTime,
    freq: frequency,
}
// Uploads train data to the database
 database.ref().push(newTrain);

 console.log(newTrain.tName);
 console.log(newTrain.dest);
 console.log(newTrain.freq);

 alert("New Train succesfully added");

 $("#train-name-input").val("");
 $("#destination-input").val("");
 $("#firsttraintime-name-input").val("");
 $("#frequency-name-input").val("");
  });
// function to run when child is added to grab a snapshot from the database and append it to your table. 
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
// Store into a variable
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().name;
    var firstTrainTime = childSnapshot.val().name;
    var frequency = childSnapshot.val().name;

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);
//for your math you will want to use Train predictions activity. 
})