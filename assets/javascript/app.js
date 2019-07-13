// on click, of the search button, build the queryURL to get & log the search results

$("#submit").on("click", function (search) {
    // keep page from refreshing on submit click
    search.preventDefault();
    
    // runs queryURL function
    buildQueryURL(search)
    console.log($(this).val());

    $.ajax ({
        url: buildQueryURL,
        method: "GET"
    })
    .then(function (response){
        var results = response._embedded.data

        for (var i = 0; results.length; i++) {
            console.log(results[i]);
        }
    
    })
});


