console.log ("hi");
console.log("testing git pushes");
console.log ("whats going on?!?!?!?!")

function buildQueryURL() {

  apiKey = "&apikey=WJCRVoCmP83xVzLx0AUyj20UyFAAKNbS";

  var localeSearch = "&city=" + $("#location").val();
  // var dateSearch = "&startDateTime=" + $("#startdate").val();
  var keywordSearch = "&keyword=" + $("#keyword").val();

  queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + apiKey + keywordSearch + localeSearch + "" + "&radius=15&units=miles";

  $.ajax({
    url: "http://104.200.17.235:8081/cors/",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      url: queryURL
    })
  }).then(function(response) {
    // console.log(JSON.parse(response))

    var data = JSON.parse(response)

    var results= data._embedded.events;

    for (var i = 0; results.length; i++) {
      console.log(results[i]);

      var data = results[i];
      var pName = $("<p>").html(data.name);
      var pDates = $("<p>").html(data.dates.start.localDate);
      var pTime = $("<p>").html(data.dates.start.localTime);
      var pVenue = $("<p>").html(data._embedded.venues[0].name)
      var img = $("<img>").attr("src", data.images[0].url)
      // var divImg = $("<div>").append(img)




      var newRow = $("<div>").addClass("row")
      $(newRow).append(img)
      $(newRow).append(pName);
      $(newRow).append(pDates);
      $(newRow).append(pTime);
      $(newRow).append(pVenue);
      $("#eventResults").append(newRow);
    }
  })

};

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
