<<<<<<< HEAD
let weatherDate = '';
=======
// let weatherDate = '';

>>>>>>> 44c1f45ed810bdc5b03270adbf55793f21deb59b
function buildQueryURL() {
  apiKey = "&apikey=WJCRVoCmP83xVzLx0AUyj20UyFAAKNbS";
  var localeSearch = "&city=" + $("#location").val();
  // var dateSearch = "&startDateTime=" + $("#startdate").val();
  var keywordSearch = "&keyword=" + $("#eventFinder").val();
<<<<<<< HEAD
  queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + apiKey + keywordSearch + localeSearch + "" + "&radius=15&units=miles";
=======

  queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + apiKey + keywordSearch + localeSearch + "" + "&radius=15&units=miles";


>>>>>>> 44c1f45ed810bdc5b03270adbf55793f21deb59b
  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  }).then(function (response) {
    console.log(response);
<<<<<<< HEAD
    // console.log(JSON.parse(response))
    // var data = response
  // });
=======




    // console.log(JSON.parse(response))

    // var data = response
  // });

>>>>>>> 44c1f45ed810bdc5b03270adbf55793f21deb59b
  // $.ajax({
  //   url: "http://104.200.17.235:8081/cors/",
  //   method: "POST",
  //   contentType: "application/json",
  //   data: JSON.stringify({
  //     url: queryURL
  //   })
  // }).then(function (response) {
<<<<<<< HEAD
    // function weatherQuery() {
    //   // var weatherQueryURL = "'" + "https://api.openweathermap.org/data/2.5/weather?q=" + localeSearch + "&APPID=73aa9f49c204f7ee3c55d47346f4224a" + "'"
=======


    // function weatherQuery() {

    //   // var weatherQueryURL = "'" + "https://api.openweathermap.org/data/2.5/weather?q=" + localeSearch + "&APPID=73aa9f49c204f7ee3c55d47346f4224a" + "'"

>>>>>>> 44c1f45ed810bdc5b03270adbf55793f21deb59b
    //   // $.ajax({
    //   //   url: weatherQueryURL,
    //   //   method: "GET"
    //   // }).then(function (response) {
    //   //   console.log(response);
    //   // });
    // }
    // weatherQuery();
<<<<<<< HEAD
=======




>>>>>>> 44c1f45ed810bdc5b03270adbf55793f21deb59b
    $('#showEvents').empty()
    for (var i = 0; i < 20; i++) {
      var data = response
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
<<<<<<< HEAD
      var newRow = $("<div>").addClass('row').attr('hover', 'background-color:yellow');
=======
      var newRow = $("<div>").addClass('row').addClass('result').addClass('rowstyle').addClass('mx-auto');
>>>>>>> 44c1f45ed810bdc5b03270adbf55793f21deb59b
      $(newRow).append(divImg)
      $(newRow).append(pName);
      $(newRow).append(pDates);
      $(newRow).append(pTime);
      $(newRow).append(pVenue);
      $("#showEvents").append(newRow);
    }
<<<<<<< HEAD
    console.log(response)
  })
};
=======

    console.log(response)

  })
};


>>>>>>> 44c1f45ed810bdc5b03270adbf55793f21deb59b
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
