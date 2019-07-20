// let weatherDate = '';
//______________________________________________________________________________

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

var eventStorage = {};

//______________________________________________________________________________

function buildQueryURL() {

  apiKey = "&apikey=WJCRVoCmP83xVzLx0AUyj20UyFAAKNbS";
  var localeSearch = "&city=" + $("#location").val();
  var weatherLocale = $("#location").val().trim();
  // var dateSearch = "&startDateTime=" + $("#startdate").val();
  var dateSearch = $("#startDate").val();
  var dateSearch = dateSearch + " 00:00:00"
  console.log(dateSearch)
  var keywordSearch = "&keyword=" + $("#keyword").val();

  queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + apiKey + keywordSearch + localeSearch + "" + "&radius=15&units=miles";


  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  }).then(function (response) {
    $('html, body').animate({
      scrollTop: $("#showEvents").offset().top
  }, 2000);
    console.log(response);




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
      var data = results[i];
      var latitude = data._embedded.venues[0].location.latitude
      var longitude = data._embedded.venues[0].location.longitude
      var time = data.dates.start.localTime
      
      

      

      var weatherDate = data.dates.start.localDate
      console.log(weatherDate)
      var pButton = $("<button>").addClass("btn btn-outline-light btn-sm").attr("type","button").html("check weather!").addClass("weather_button").attr("date",weatherDate).attr("latitude",latitude).attr("longitude",longitude).attr("time",time).addClass("myBtn")

      var pButtonTicket = $("<button>").addClass("btn btn-outline-dark btn-sm").attr("type","button").attr("data-toggle","modal").attr("data-target", "#exampleModal").html("Buy tickets!").addClass("ticket_button").attr("link",data.url)


      var pName = $("<p>").text(data.name).addClass('col').addClass('resultfont')
      var pDates = $("<p>").text(data.dates.start.localDate).addClass('col').addClass('resultfont')
      var pTime = $("<p>").text(data.dates.start.localTime).addClass('col').addClass('resultfont')
      var pVenue = $("<p>").text(data._embedded.venues[0].name).addClass('col').addClass('resultfont')
      var img = $("<img>").attr("src", data.images[0].url).addClass('style')
      var divImg = $("<div>").append(img).addClass('col');

       eventStorage = {
        name: data.name,
        date: data.dates.start.localDate,
        time: data.dates.start.localTime,
        venue: data._embedded.venues[0].name,
        image: data.images[0].url,
      }

      var newRow = $("<div>").addClass('row').addClass('result').addClass('rowstyle').addClass('mx-auto');
      $(newRow).append(divImg)
      $(newRow).append(pName);
      $(newRow).append(pDates);
      $(newRow).append(pTime);
      $(newRow).append(pVenue);
      $(newRow).append(pButton);
      $(newRow).append(pButtonTicket);

      $(newRow).attr("storage-param", JSON.stringify(eventStorage));

      $("#showEvents").append(newRow);

    }

    $(".weather_button").on("click", function(){
   
      var checkAttr = $(this).attr("date")
      longitude = $(this).attr("longitude")
      latitude = $(this).attr("latitude")
       time = $(this).attr("time")
    
    
      var date = checkAttr + " " + time 
      var unixtimestamp = (new Date(date.replace('-','/'))).getTime() / 1000;
        alert(unixtimestamp);
    
    
    //       var weatherDate = $("#startDate").val() + " " + "00:00:00"
    // console.log(weatherDate)
    
    var weatherDate = unixtimestamp
    var weatherQueryURL = "https://api.darksky.net/forecast/f7aa1c7b917ea38ae0bd00bb098484a9/"  + latitude + "," + longitude + "," + weatherDate
    // var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherLocale + "&APPID=73aa9f49c204f7ee3c55d47346f4224a"
    $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/' + weatherQueryURL,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    }).then(function (response) {
    
    
    console.log(response);
    console.log(response.daily.data[0].icon)
    console.log(response.daily.data[0].summary)
    console.log(response.daily.data[0].temperatureHigh)
    
    })
    })

    $(".ticket_button").on("click", function(){
   
      var checkAttrTicket = $(this).attr("link")
      // window.location.href = checkAttrTicket
      window.open(checkAttrTicket, '_blank');
    })
    console.log(response);
  })
};





$("#eventFinder").on("click", function () {
  buildQueryURL();
})



$(document).on("click", "div" , function(event){
  event.preventDefault();
  // console.log($(this).attr("storage-param"))

  if(event.target.className == "row result rowstyle mx-auto"){

    var tempStorage = $(this).attr("storage-param");

    eventStorage = JSON.parse(tempStorage);

    console.log(eventStorage);

    database.ref().push(eventStorage);
  
  }

})