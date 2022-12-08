// var cityname = $('#cityInput').val();
var units = "imperial";
var lang = "en";

var api_URL = 'https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}';

var api_key = '7a15c3334d6b00f3714da34b31d34a10';

var cities = [];
// var searchHistory = [];
var cityInfo = $("#searchedCityInfo");

function displayCityInfo(cityname){
    $(cityInfo).empty();
    $('#history-view').empty();

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${api_key}&units=${units}&lang=${lang}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
    console.log(response)

    // var cityDiv = $("<div class='movie>");
    // var cName = response.cityname;

    var cityTitle = $("<h1>").text(cityname);

    cityInfo.append(cityTitle);

    var wind = response.list[3].wind.speed;

    var p = $("<p>");

    p.text("Wind Speed:" + " " + wind + " " + "mph");

    cityInfo.append(p);

    console.log(wind);

    var humidity = response.list[3].main.humidity;

    var p2 = $("<p>");

    p2.text("Humidity:" + " " + humidity + " " + "%");

    cityInfo.append(p2);

    console.log(humidity);

    var temp = response.list[3].main.temp;

    var p3 = $("<p>");

    p3.text("Temp:" + " " + temp + " " + "°F");

    cityInfo.append(p3);

    console.log(temp);
    })
    
    displayHistory();
}

function displayHistory() {

    for (var i = 0; i < cities.length; i++) {
        var a = $("<button>");

        a.addClass("city-btn");

        a.attr("data-name", cities[i]);

        a.text(cities[i]);

        $('#history-view').append(a);
    }
}

$('#search-city').on('click', function(event) {
    event.preventDefault();

    var cityname = $('#cityInput').val().trim();

    console.log(cityname);

    cities.push(cityname);

    displayHistory();

    displayCityInfo(cityname);

});

$(document).on('click', '.city-btn', displayCityInfo);

displayHistory();

// console.log(fiveData)
//         for (let i = 0; i < 5; i++) {
//             console.log(card[i])
//             console.log(fiveData.list[(i * 8)])