// firebase
var temp = ""
var icon = ""
var summary = ""
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
    var database = firebase.database();
    var eventStorage = {};
/////////////////////////////////////////////////////////////////////////////////////////////
  
var localeSearch = "&city=" + $("#location").val();

//==============================================================================================================

function buildQueryURL() {
  apiKey = "&apikey=WJCRVoCmP83xVzLx0AUyj20UyFAAKNbS";
  var localeSearch = "&city=" + $("#location").val();
  var weatherLocale = $("#location").val().trim();
  // var dateSearch = "&startDateTime=" + $("#startdate").val();
  var dateSearch = $("#startDate").val();
  // var dateSearch = dateSearch + " 00:00:00"

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


<<<<<<< HEAD

<<<<<<< HEAD
    // weather api 
    // weatherDate
    var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherLocale + "&APPID=73aa9f49c204f7ee3c55d47346f4224a"
    $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/' + weatherQueryURL,
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    }).then(function (response) {
      console.log(response);
    })
=======

>>>>>>> ecd0fffab1c16b9b3dbedb885d0863b22e1294bb
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




=======
>>>>>>> 41027682ac1fb209d63d7e1b5a2679e4e12300b9
    $('#showEvents').empty()
    // starting boolean for the alternating colors if statement
    var isPurple = false
    var num = 0;

    // for loop to run through response from ticketmaster
    for (var i = 0; i < 20; i++) {
      // variables that store data from ticketmaster
      var data = response
      var results = data._embedded.events
      var data = results[i];
      var latitude = data._embedded.venues[0].location.latitude
      var longitude = data._embedded.venues[0].location.longitude
      var time = data.dates.start.localTime



      // grabbing the month and day of the date by splitting the date YYYY-MM-DD into an array of three elements, and then grabbing the month and day using indexes 

      var weatherDate = data.dates.start.localDate
      console.log(weatherDate)
     var dates =  weatherDate.split("-") //new
     console.log(dates) //new 
     var month = dates[1] //new
     console.log(month) //new

    //  if satement to make months single digits. If the first digit is zero, then grab the second number
     if (month[0] == 0) {
     var month = dates[1].slice(-1)
     console.log(month)
     }
    //  if months' first digit is not zero, then the month value stays the same
     else if (month[0] ==! 0) {
       var month = month
     }
     var day = dates[2]
     console.log(month)
 var months = [
   "empty",
      "Jan",
       "Feb",
       "Mar",
     "Apr",
       "May",
      "Jun",
      "July",
      "Aug",
       "Sept",
     "Oct",
      "Nov",
       "Dec",
 ]
// months[0] will be empty, months[1] will be Jan, months[2] will be Feb,.etc
// months[month] means the array above uses month from event(formatted by previous if statement)
var month = (months[month])


    // button that checks for weather information
      var pButton = $("<button>").addClass("btn btn-outline-primary btn-sm").attr("type","button").html("Weather!").addClass("weather_button").attr("date",weatherDate).attr("latitude",latitude).attr("longitude",longitude).attr("time",time).addClass("col-md-5 col-sm-6 pButton")
// button that takes user to ticketmaster website for tickets
      var pButtonTicket = $("<button>").addClass("btn btn-outline-dark btn-sm").attr("type","button").attr("data-toggle","modal").attr("data-target", "#exampleModal").html("Buy tickets!").addClass("ticket_button").attr("link",data.url).addClass("col-md-5 col-sm-6 pButtonTicket")
// weather date variable stroes the date for each event
      weatherDate = data.dates.start.localDate
      // function that converts time into unix time using moment.js
      function convert(input) {
        return moment(input, 'HH:mm:ss').format('h:mm A');
      }
      var timeData = data.dates.start.localTime
      var timeData = convert(timeData)
      // name of event
      var pName = $("<p>").text(data.name).addClass('row').addClass('resultfont').addClass("title")
      // var pDates = $("<p>").text(data.dates.start.localDate).addClass('row').addClass('resultfont')
      // time of event
      var pTime = $("<p>").text(timeData).addClass('row').addClass('resultfont').addClass("time")
      // name of venue
      var pVenue = $("<p>").text(data._embedded.venues[0].name).addClass('row').addClass('resultfont').addClass("venue")
      // div for image for event
      var imgCol = $("<div>").addClass("col-md-3").addClass('img_style')
      // column for information about the event enclosed in "newRow" 
      var otherCol = $("<div>").addClass("col-md-4").addClass("other_col")
      // div for date information
      var dateDiv = $("<div>").addClass("col-md-2")

      // if statement that alternates the colors of the date divs by changing classes styled by each color
      if (isPurple == false) {
        dateDiv.removeClass("dates_purple")
        dateDiv.addClass("dates_pink")
        var isPurple = true
      }

      else if (isPurple == true) {
        dateDiv.removeClass("dates_pink")
        dateDiv.addClass("dates_purple")
        var isPurple = false
      }


      //  divs that contain elements with information about the event
      var monthDiv = $("<div>").addClass("row")
      var monthP = $("<p>").text(month).addClass("month").addClass("align-self-center")
      var dayDiv = $("<div>").addClass("row")
      var dayP = $("<p>").text(day).addClass("day").addClass("align-self-center")

      var img = $("<img>").attr("src", data.images[0].url).addClass('style')
      var divImg = $("<div>").append(img).addClass('row div_Img')
      var buttonDiv =$("<div>").addClass("row")
    
      console.log(num)

      eventStorage = {
        name: data.name,
        venue: data._embedded.venues[0].name,
        image: data.images[0].url,
        
        //========       NEW   ===================

        weather_temp: temp,
        weather_icon: icon,
        weather_summary: summary, 
        event_day: day,
        event_month: month,
        event_time: timeData,
  
      }

      var newRow = $("<div>").addClass('row').addClass('result').addClass('rowstyle').addClass('mx-auto').attr("this_row", "iden" + num).addClass( "iden" + num )
      
      $(pButton).attr("this_row", "iden" + num)
      console.log($(newRow).attr("this_row"))
      console.log($(pButton).attr("this_row"))
      num++
      console.log(num)
      $(dayDiv).append(dayP)
      $(dateDiv).append(dayDiv)
      $(monthDiv).append(monthP)
      $(dateDiv).append(monthDiv)
      $(newRow).append(dateDiv)
      $(buttonDiv).append(pButton)
      $(buttonDiv).append(pButtonTicket)

      $(imgCol).append(divImg)
      $(newRow).append(imgCol)
      $(newRow).append(otherCol)
      $(otherCol).append(pName);
      $(otherCol).append(pTime);
      $(otherCol).append(pVenue);
      $(otherCol).append(buttonDiv)



      $("#showEvents").append(newRow);

    }
    $(".weather_button").on("click", function () {
      // $(this).innerHTML("disabled")
      var whichRow = $(this).attr("this_row")
      console.log(whichRow)

      var checkAttr = $(this).attr("date")
      longitude = $(this).attr("longitude")
      latitude = $(this).attr("latitude")
      time = $(this).attr("time")

<<<<<<< HEAD
    $(".ticket_button").on("click", function () {

      var checkAttrTicket = $(this).attr("link")
      // window.location.href = checkAttrTicket
      window.open(checkAttrTicket, '_blank');
    })
    console.log(response);
  })
};
=======
>>>>>>> 41027682ac1fb209d63d7e1b5a2679e4e12300b9

      var date = checkAttr + " " + time
      var unixtimestamp = (new Date(date.replace('-', '/'))).getTime() / 1000;





      var weatherDate = unixtimestamp
      var weatherQueryURL = "https://api.darksky.net/forecast/f7aa1c7b917ea38ae0bd00bb098484a9/" + latitude + "," + longitude + "," + weatherDate

      $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/' + weatherQueryURL,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }).then(function (response) {

        // obtains info 
        console.log(response);
        // variables that hold info about the weather
        icon = (response.daily.data[0].icon)
         summary = (response.daily.data[0].summary)
        temp = (response.daily.data[0].temperatureHigh)
        pButton.attr("icon_id", icon)
        var icon_to_use = $(pButton).attr("icon_id")


        var weatherInfo = $('<div>').addClass("col-md-3").addClass("weather")
        var weatherIcon = $('<p>').text(icon)
        var weatherSummary = $('<p>').text(summary)
        var weatherTemp = $('<p>').text(temp + "°F")
        // $(weatherInfo).append(weatherIcon)
        $(weatherInfo).append(weatherTemp)
        $(weatherInfo).append(weatherSummary)


        $("." + whichRow).append(weatherInfo)
        // SKYCONS divs
        var figure = $("<figure>")
        console.log(icon)
        var canvas = $("<canvas>").attr("id", icon_to_use).addClass(whichRow).addClass("col")
        $(figure).append(canvas)
        $(weatherInfo).append(figure)


        //  SKYCONS info

        var icons = new Skycons({ "color": "black" });
        icons.set("clear-day", Skycons.CLEAR_DAY);
        icons.set("clear-night", Skycons.CLEAR_NIGHT);
        icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
        icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
        icons.set("cloudy", Skycons.CLOUDY);
        icons.set("rain", Skycons.RAIN);
        icons.set("sleet", Skycons.SLEET);
        icons.set("snow", Skycons.SNOW);
        icons.set("wind", Skycons.WIND);
        icons.set("fog", Skycons.FOG);
        icons.play();

      })
    })

    $(".ticket_button").on("click", function () {
      //  takes user to ticketmaster site using previously assigned attribute being the link url
      var checkAttrTicket = $(this).attr("link")
      window.open(checkAttrTicket, '_blank');


    })
    console.log(response)

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