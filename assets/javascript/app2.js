var firebaseConfig = {
    apiKey: "AIzaSyDoh9CiUaIkimUAiwFNae_B7mtxtegqjR4",
    authDomain: "jjlcr-project1.firebaseapp.com",
    databaseURL: "https://jjlcr-project1.firebaseio.com",
    projectId: "jjlcr-project1",
    storageBucket: "",
    messagingSenderId: "574264784152",
    appId: "1:574264784152:web:8405b45c7f783cc0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();



database.ref().on("child_added", function(childsnapshot){

    console.log(childsnapshot.val());
  
    var savedName = $("<p>").text(childsnapshot.val().name).addClass('col').addClass('resultfont')
    var savedDates = $("<p>").text(childsnapshot.val().date).addClass('col').addClass('resultfont')
    var savedTime = $("<p>").text(childsnapshot.val().time).addClass('col').addClass('resultfont')
    var savedVenue = $("<p>").text(childsnapshot.val().venue).addClass('col').addClass('resultfont')
    var savedImg = $("<img>").attr("src", childsnapshot.val().image).addClass('style')
    var savedDivImg = $("<div>").append(savedImg).addClass('col');
  
    var savedRow = $("<div>").addClass('row').addClass('result').addClass('rowstyle').addClass('mx-auto');
    $(savedRow).append(savedDivImg)
    $(savedRow).append(savedName);
    $(savedRow).append(savedDates);
    $(savedRow).append(savedTime);
    $(savedRow).append(savedVenue);
  
  
    $("#saved-events").append(savedRow);
  
  });