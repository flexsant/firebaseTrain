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
  console.log(trainName);
  var destination = $("#destination-input").val().trim();
  console.log(destination);
  var firstTrainTime = $("#firsttraintime-name-input").val().trim();
  console.log(firstTrainTime);
  var frequency = $("#frequency-name-input").val().trim();
  console.log(frequency);

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
  console.log(newTrain.fTrain);
  console.log(newTrain.freq);

  alert("New Train succesfully added");

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#firsttraintime-name-input").val("");
  $("#frequency-name-input").val("");
});
// function to run when child is added to grab a snapshot from the database and append it to your table. 
database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());
  // Store into a variable
  var trainName = childSnapshot.val().tName;
  var destination = childSnapshot.val().dest;
  var firstTime = childSnapshot.val().fTrain;
  var tFrequency = childSnapshot.val().freq;

  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);

  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);

  // Minute Until Train
  var tMinutesTillTrain = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  // Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


  console.log(trainName);
  console.log(destination);
  console.log(firstTime);
  console.log(tFrequency);
  console.log(currentTime);
 
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(tFrequency),
    $("<td>").text(moment(nextTrain).format("hh:mm")),
    $("<td>").text(tMinutesTillTrain),
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
  $("#current-time").html("<h2>" + " " + moment(nextTrain).format("hh:mm") + " " + "</h2>");

})