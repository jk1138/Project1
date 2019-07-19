// let weatherDate = '';

function buildQueryURL() {
  apiKey = "&apikey=WJCRVoCmP83xVzLx0AUyj20UyFAAKNbS";
  var localeSearch = "&city=" + $("#location").val();
  var weatherLocale = $("#location").val();
  // var dateSearch = "&startDateTime=" + $("#startdate").val();
  var keywordSearch = "&keyword=" + $("#keyword").val();

  queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + apiKey + keywordSearch + localeSearch + "" + "&radius=15&units=miles";


  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  }).then(function (response) {
    console.log(response);



// weather api 
// weatherDate
var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherLocale + "&APPID=73aa9f49c204f7ee3c55d47346f4224a"
$.ajax({
  url: 'https://cors-anywhere.herokuapp.com/' + weatherQueryURL,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
}).then(function (response) {
  console.log(response);
})
    // console.log(JSON.parse(response))

    // var data = response
  // });

  // $.ajax({
  //   url: "http://104.200.17.235:8081/cors/",
  //   method: "POST",
  //   contentType: "application/json",
  //   data: JSON.stringify({
  //     url: queryURL
  //   })
  // }).then(function (response) {


    // function weatherQuery() {

    //   // var weatherQueryURL = "'" + "https://api.openweathermap.org/data/2.5/weather?q=" + localeSearch + "&APPID=73aa9f49c204f7ee3c55d47346f4224a" + "'"

    //   // $.ajax({
    //   //   url: weatherQueryURL,
    //   //   method: "GET"
    //   // }).then(function (response) {
    //   //   console.log(response);
    //   // });
    // }
    // weatherQuery();




    $('#showEvents').empty()
    for (var i = 0; i < 20; i++) {
      var data = response
      var results = data._embedded.events
      console.log(results[i]);
      var data = results[i];
   
<<<<<<< HEAD
      weatherDate = data.dates.start.localDate
      var pName = $("<p>").text(data.name).addClass('col')
      var pDates = $("<p>").text(data.dates.start.localDate).addClass('col')
      var pTime = $("<p>").text(data.dates.start.localTime).addClass('col')
      var pVenue = $("<p>").text(data._embedded.venues[0].name).addClass('col')
=======

      var weatherDate = data.dates.start.localDate
      console.log(weatherDate)
      var pButton = $("<button>").addClass("btn btn-outline-success btn-sm").attr("type","button").attr("data-toggle","modal").attr("data-target", "#exampleModal").html("check weather!").addClass("weather_button").attr("date",weatherDate)
      var pButtonTicket = $("<button>").addClass("btn btn-outline-success btn-sm").attr("type","button").attr("data-toggle","modal").attr("data-target", "#exampleModal").html("Buy tickets!").addClass("ticket_button").attr("link",data.url)

      weatherDate = data.dates.start.localDate

      var pName = $("<p>").text(data.name).addClass('col').addClass('resultfont')
      var pDates = $("<p>").text(data.dates.start.localDate).addClass('col').addClass('resultfont')
      var pTime = $("<p>").text(data.dates.start.localTime).addClass('col').addClass('resultfont')
      var pVenue = $("<p>").text(data._embedded.venues[0].name).addClass('col').addClass('resultfont')

>>>>>>> 2d08bda044127b2024df9c2aba59a1ec1507ff03
      var img = $("<img>").attr("src", data.images[0].url).addClass('style')
      var divImg = $("<div>").append(img).addClass('col')
      //  .addClass("row")
      var newRow = $("<div>").addClass('row').addClass('result').addClass('rowstyle').addClass('mx-auto');
      $(newRow).append(divImg)
      $(newRow).append(pName);
      $(newRow).append(pDates);
      $(newRow).append(pTime);
      $(newRow).append(pVenue);
      $(newRow).append(pButton)
      $(newRow).append(pButtonTicket)
      $("#showEvents").append(newRow);
<<<<<<< HEAD
=======
      
>>>>>>> 2d08bda044127b2024df9c2aba59a1ec1507ff03
    }
    $(".weather_button").on("click", function(){
   
      var checkAttr = $(this).attr("date")
      alert(checkAttr)
     
    })

    $(".ticket_button").on("click", function(){
   
      var checkAttrTicket = $(this).attr("link")
      alert(checkAttrTicket)
     
    })
    console.log(response)

  })
};


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

var localeSearch = "&city=" + $("#location").val();
// $.ajax({
//   type: "POST",
//   url: "https://api.openweathermap.org/data/2.5/weather?q=" + localeSearch + "&APPID=73aa9f49c204f7ee3c55d47346f4224a" + "'",
//   dataType: "json",
//   success: function (result, status, xhr) {
      
//     console.log(result)
//   },
//   error: function (xhr, status, error) {
//       alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
//   }
// });

