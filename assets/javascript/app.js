let weatherDate = '';

function buildQueryURL() {
  apiKey = "&apikey=WJCRVoCmP83xVzLx0AUyj20UyFAAKNbS";

  var localeSearch = "&city=" + $("#location").val().trim();
  var dateSearch = "&startDateTime=" + $("#startDate").val().trim();
  var keywordSearch = "&keyword=" + $("#keyword").val().trim();
  var endDate = "&endDateTime=" + $("#endDate").val().trim();
  console.log(dateSearch)

  queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + apiKey + keywordSearch + localeSearch + dateSearch + endDate + "&radius=15&units=miles";

  $.ajax({
    url: "http://104.200.17.235:8081/cors/",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      url: queryURL
    })
  }).then(function (response) {
    function weatherQuery() {

      // var weatherQueryURL = "'" + "https://api.openweathermap.org/data/2.5/weather?q=" + localeSearch + "&APPID=73aa9f49c204f7ee3c55d47346f4224a" + "'"

      // $.ajax({
      //   url: weatherQueryURL,
      //   method: "GET"
      // }).then(function (response) {
      //   console.log(response);
      // });
    }
    weatherQuery();
    $('#showEvents').empty()
    for (var i = 0; i < 20; i++) {
      var data = JSON.parse(response)
      var results = data._embedded.events
      console.log(results[i]);

      var data = results[i];
   
      weatherDate = data.dates.start.localDate

      var pName = $("<p>").text(data.name).addClass('col')
      var pDates = $("<p>").text(data.dates.start.localDate).addClass('col')
      var pTime = $("<p>").text(data.dates.start.localTime).addClass('col')
      var pVenue = $("<p>").text(data._embedded.venues[0].name).addClass('col')
      var img = $("<img>").attr("src", data.images[0].url).addClass('style')
      var divImg = $("<div>").append(img).addClass('col')



      //  .addClass("row")
      var newRow = $("<div>").addClass('row')
      $(newRow).append(divImg)
      $(newRow).append(pName);
      $(newRow).append(pDates);
      $(newRow).append(pTime);
      $(newRow).append(pVenue);
      $("#showEvents").append(newRow);

    }

    console.log(JSON.parse(response))

<<<<<<< HEAD
<<<<<<< HEAD
$("#eventfinder").on("click", function(){
    buildQueryURL();
  })

for (var i = 0; i < results.length; i++) {
  console.log(results[i]);

  var data = results[i];
  var pName = $("<p>").html(data.name);
  var pDates = $("<p>").html(data.dates.start.localDate);
  var pTime = $("<p>").html(data.dates.start.localTime);
  var pVenue = $("<p>").html(data._embedded.venues[0].name)
  var img = $("<img>").attr("src",data.images[0].url)
  // var divImg = $("<div>").append(img)
  

  

  var newRow = $("<div>").addClass("row")
  $(newRow).append(img)
  $(newRow).append(pName);
  $(newRow).append(pDates);
  $(newRow).append(pTime);
  $(newRow).append(pVenue);
  $("#eventResults").append(newRow);
};
=======
$("#eventfinder").on("click", function () {
  buildQueryURL();
})

// var data = results[i];
// var pName = $("<p>").html(data.name);
// var pDates = $("<p>").html(data.dates.start.localDate);
// var pTime = $("<p>").html(data.dates.start.localTime);
// var pVenue = $("<p>").html(data._embedded.venues[0].name)
// var img = $("<img>").attr("src", data.images[0].url)
// // var divImg = $("<div>").append(img)




// var newRow = $("<div>").addClass("row")
// $(newRow).append(img)
// $(newRow).append(pName);
// $(newRow).append(pDates);
// $(newRow).append(pTime);
// $(newRow).append(pVenue);
// $("#eventResults").append(newRow);
>>>>>>> 5ce6a614a733453dc04a377bd4b6ed3a2d07e553
=======
  })
}
$("#eventFinder").on("click", function () {
  buildQueryURL();
})

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDh5DPIlsYtfh4x-PeXsQrNS2l20zxPxPs",
  authDomain: "project1-ec674.firebaseapp.com",
  databaseURL: "https://project1-ec674.firebaseio.com",
  projectId: "project1-ec674",
  storageBucket: "",
  messagingSenderId: "580863475932",
  appId: "1:580863475932:web:a7813153dd7c134e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
>>>>>>> 6ef2752a3d5f6538a857baa653980d7e79716902
