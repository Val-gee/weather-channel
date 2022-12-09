// var cityname = $('#cityInput').val();
var units = "imperial";
var lang = "en";

var api_URL = 'https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}';

var api_key = '7a15c3334d6b00f3714da34b31d34a10';

var cities = [];
// var searchHistory = [];
var cityInfo = $("#searchedCityInfo");
var fiveDayCards = $('.list-group');

function displayCityInfo(cityname){
    $(cityInfo).empty();
    $('#history-view').empty();

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${api_key}&units=${units}&lang=${lang}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
    console.log(response)

    var cityTitle = $("<h1>").text(cityname);
    var p = $("<p>");
    var p2 = $("<p>");
    var p3 = $("<p>");
    var wind = response.list[3].wind.speed;
    var humidity = response.list[3].main.humidity;
    var temp = response.list[3].main.temp;

    console.log(wind);
    console.log(humidity);
    console.log(temp);   

    p.text("Wind Speed:" + " " + wind + " " + "mph");
    p2.text("Humidity:" + " " + humidity + " " + "%");
    p3.text("Temp:" + " " + temp + " " + "°F");

    
    cityInfo.append(cityTitle);
    cityInfo.append(p);
    cityInfo.append(p2);
    cityInfo.append(p3);


    });

    displayHistory();
}

function displayHistory() {

    for (var i = 0; i < cities.length; i++) {
        var a = $("<button>");

        a.addClass("city-btn btn-primary");

        a.attr("data-name", cities[i]);

        a.text(cities[i]);

        $('#history-view').append(a);
    }
};

function displayFiveDayForecast(cityname) {
    $(fiveDayCards).empty();

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${api_key}&units=${units}&lang=${lang}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
    
        for (var i = 0; i < fiveDayCards.length; i++) {
            var currentDate = (response.list[i * 8].dt_txt);
            var currentWind = response.list[i * 8].wind.speed;
            var currentHumidity = response.list[i * 8].main.humidity;
            var currentTemp = response.list[i * 8].main.temp;
    
            var d = $('<li>');
            var w = $('<li>');
            var h = $('<li>');
            var t = $('<li>');
    
            d.text("Date:" + " " + currentDate);
            w.text("Wind Speed:" + " " + currentWind + " " + "mph");
            h.text("Humidity:" + " " + currentHumidity + " " + "%");
            t.text("Temp:" + " " + currentTemp + " " + "F°")
    
            fiveDayCards.append(d);
            fiveDayCards.append(w);
            fiveDayCards.append(h);
            fiveDayCards.append(t);
    
            }
    });
};

$('#search-city').on('click', function(event) {
    event.preventDefault();

    var cityname = $('#cityInput').val().trim();

    console.log(cityname);

    cities.push(cityname);

    displayHistory();

    displayCityInfo(cityname);

    displayFiveDayForecast(cityname);

});

$(document).on('click', '.city-btn', displayCityInfo);

displayHistory();

// console.log(fiveData)
//         for (let i = 0; i < 5; i++) {
//             console.log(card[i])
//             console.log(fiveData.list[(i * 8)])