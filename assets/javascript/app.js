console.log ("hi");


function buildQueryURL(){

    apiKey = "&apikey=WJCRVoCmP83xVzLx0AUyj20UyFAAKNbS";

    var localeSearch ="&city=" + $("#location").val().trim();
    // var dateSearch ="&startDateTime=" + $("#startdate").val();
    var keywordSearch ="&keyword=" + $("#keyword").val().trim();

    queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + apiKey + keywordSearch + localeSearch + "" + "&radius=15&units=miles";

    $.ajax({
        url: "http://104.200.17.235:8081/cors/",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          url: queryURL
        })
      }).then(function (response) {
        console.log(JSON.parse(response))
      
        var results = JSON.parse(response)._embedded.events;

        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);

            var eventName = $("<h4>").html(results[i].name);
            eventName.addClass("card-title");
            var venueName = $("<p>").html(results[i]._embedded.venues[0].name);
            venueName.addClass("card-text");
            var weatherButton = $("<button>").text("Check Weather");
            var randomP = $("<p>").text(" ");
            
            var eventIMG;

            var imageArrayresults = results[i].images;

                eventIMG = $("<img>").attr("src", imageArrayresults[0].url);
                eventIMG.attr("style", "width:160px");
                eventIMG.attr("style", "height:90px");
              
            var cardBodyDiv = $("<div>").addClass("card-block").addClass("px-2");
            var cardHeaderDiv = $("<div>").addClass("card-header").addClass("border-0");
            var mainCardDiv = $("<div>").addClass("card").addClass("flex-row").addClass("flex-wrap").addClass("mx-auto");

            cardBodyDiv.append(randomP);
            cardBodyDiv.append(eventName);
            cardBodyDiv.append(venueName);
            cardBodyDiv.append(weatherButton);
            cardHeaderDiv.html(eventIMG);
            cardHeaderDiv.append(cardBodyDiv);
            mainCardDiv.append(cardHeaderDiv);
            $("#results-div").append(mainCardDiv);

        }
      })

};

$("#eventfinder").on("click", function(){
    buildQueryURL();
})



