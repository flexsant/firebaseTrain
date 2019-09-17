# firebaseTrain

## Screen Shot
<img src="screenshot.png" alt="screenshot">

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Javascript - allows dynamic interaction between user and computer data entry
- JQuery - a javascript library that allows for simple yet more diverse and less verbos.
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Moment.js - allows app to parse, validate, manipulate, and display dates and times in Javascript
- Firebase - provides insight into app usage and user engagement

## Summary
This application allows the user to play a matching number game with a computer generated random number. The user chooses from four poisons with different values only seen once it is clicked and the corresponding number is displayed. If the user matches the computer's chosen random number then their win will be tallied. Just as if the user doesn't match the computer generated number then a loss will be tallied. Each new game win or loss with regenarate a computer generated random number and a new random value for each poison. 

## Code Snippet
'''JQuery

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
    var destination = $("#destination-name-input").val().trim();
    var firstTrainTime = $("firsttraintime-name-input").val().trim();
    var frequency = $("#frequency-name-inpit").val().trim();


  

## Author Links
[GitHub](https://github.com/flexsant)