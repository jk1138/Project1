console.log ("hi");


function buildQueryURL(){

    apiKey = "&apikey=WJCRVoCmP83xVzLx0AUyj20UyFAAKNbS";

    var localeSearch ="&city=" + $("#location").val().trim();
    var dateSearch ="&startDateTime=" + $("#startdate").val().trim();
    var keywordSearch ="&keyword=" + $("#keyword").val().trim();

    queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + apiKey + keywordSearch + localeSearch + dateSearch + "&radius=15&units=miles";

    $.ajax({
        url: "http://104.200.17.235:8081/cors/",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          url: queryURL
        })
      }).then(function (response) {
        console.log(JSON.parse(response));
      
        var parsedResponse = JSON.parse(response);
      
        var results = parsedResponse._embedded.events;

        for (var i = 0; results.length; i++) {
            console.log(results[i]);
        }
      })

};

$("#eventfinder").on("click", function(){
    buildQueryURL();
})



