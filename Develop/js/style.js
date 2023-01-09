// var cityname = $('#cityInput').val();
var units = "imperial";
var lang = "en";

var api_URL = 'https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}';

var api_key = '7a15c3334d6b00f3714da34b31d34a10';

var cities = [];
// var searchHistory = [];
var cityInfo = $("#searchedCityInfo");
var list1 = $('.list');
var list2 = $('.list2');
var list3 = $('.list3');
var list4 = $('.list4');
var list5 = $('.list5');

function displayCityInfo(cityname){
    $(cityInfo).empty();
    $('#history-view').empty();

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${api_key}&units=${units}&lang=${lang}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
    console.log(response)

    var cityTitle = $("<h3>").text(cityname);
    var p = $("<p>");
    var p2 = $("<p>");
    var p3 = $("<p>");

    var wind = response.list[3].wind.speed;
    var humidity = response.list[3].main.humidity;
    var temp = response.list[3].main.temp;
    var icon = response.list[3].weather[0].icon;
    
    var weatherIcon = $('#weatherIcon');
    var imageURL = "https://openweathermap.org/img/wn" + icon + "@2x.png";
    
    
    console.log(wind);
    console.log(humidity);
    console.log(temp);  
    console.log(imageURL); 

    p.text("Wind Speed:" + " " + wind + " " + "mph");
    p2.text("Humidity:" + " " + humidity + " " + "%");
    p3.text("Temp:" + " " + temp + " " + "°F");
    
    cityInfo.append(cityTitle);
    cityInfo.append(p);
    cityInfo.append(p2);
    cityInfo.append(p3);
    weatherIcon.append(imageURL);
    

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
    $(list1).empty();
    $(list2).empty();
    $(list3).empty();
    $(list4).empty();
    $(list5).empty();

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${api_key}&units=${units}&lang=${lang}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
            var currentDate = (response.list[0,1,2,3,4,5,6,7,8].dt_txt);
            var currentWind = response.list[0,1,2,3,4,5,6,7,8].wind.speed;
            var currentHumidity = response.list[0,1,2,3,4,5,6,7,8].main.humidity;
            var currentTemp = response.list[0,1,2,3,4,5,6,7,8].main.temp;
    
            var currentDate1 = $('<li>');
            var currentWind1 = $('<li>');
            var currentHumidity1 = $('<li>');
            var currentTemp1 = $('<li>');
    
            currentDate1.text("Date:" + " " + currentDate);
            currentWind1.text("Wind Speed:" + " " + currentWind + " " + "mph");
            currentHumidity1.text("Humidity:" + " " + currentHumidity + " " + "%");
            currentTemp1.text("Temp:" + " " + currentTemp + " " + "F°")
    
            list1.append(currentDate1);
            list1.append(currentWind1);
            list1.append(currentHumidity1);
            list1.append(currentTemp1);

            var currentDate = (response.list[9,10,11,12,13,14,15,16].dt_txt);
            var currentWind = response.list[9,10,11,12,13,14,15,16].wind.speed;
            var currentHumidity = response.list[9,10,11,12,13,14,15,16].main.humidity;
            var currentTemp = response.list[9,10,11,12,13,14,15,16].main.temp;

            var currentDate2 = $('<li>');
            var currentWind2 = $('<li>');
            var currentHumidity2 = $('<li>');
            var hcurrentTemp2 = $('<li>');

            currentDate2.text("Date:" + " " + currentDate);
            currentWind2.text("Wind Speed:" + " " + currentWind + " " + "mph");
            currentHumidity2.text("Humidity:" + " " + currentHumidity + " " + "%");
            hcurrentTemp2.text("Temp:" + " " + currentTemp + " " + "F°");

            list2.append(currentDate2);
            list2.append(currentWind2);
            list2.append(currentHumidity2);
            list2.append(hcurrentTemp2);

            var currentDate = (response.list[17,18,19,20,21,22,23,24].dt_txt);
            var currentWind = response.list[17,18,19,20,21,22,23,24].wind.speed;
            var currentHumidity = response.list[17,18,19,20,21,22,23,24].main.humidity;
            var currentTemp = response.list[17,18,19,20,21,22,23,24].main.temp;

            var currentDate3 = $('<li>');
            var currentWind3 = $('<li>');
            var currentHumidity3 = $('<li>');
            var currentTemp3 = $('<li>');

            currentDate3.text("Date:" + " " + currentDate);
            currentWind3.text("Wind Speed:" + " " + currentWind + " " + "mph");
            currentHumidity3.text("Humidity:" + " " + currentHumidity + " " + "%");
            currentTemp3.text("Temp:" + " " + currentTemp + " " + "F°");

            list3.append(currentDate3);
            list3.append(currentWind3);
            list3.append(currentHumidity3);
            list3.append(currentTemp3);

            var currentDate = (response.list[25,26,27,28,29,30,31,32].dt_txt);
            var currentWind = response.list[25,26,27,28,29,30,31,32].wind.speed;
            var currentHumidity = response.list[25,26,27,28,29,30,31,32].main.humidity;
            var currentTemp = response.list[25,26,27,28,29,30,31,32].main.temp;

            var currentDate4 = $('<li>');
            var currentWind4 = $('<li>');
            var currentHumidity4 = $('<li>');
            var currentTemp4 = $('<li>');

            currentDate4.text("Date:" + " " + currentDate);
            currentWind4.text("Wind Speed:" + " " + currentWind + " " + "mph");
            currentHumidity4.text("Humidity:" + " " + currentHumidity + " " + "%");
            currentTemp4.text("Temp:" + " " + currentTemp + " " + "F°");

            list4.append(currentDate4);
            list4.append(currentWind4);
            list4.append(currentHumidity4);
            list4.append(currentTemp4);

            var currentDate = (response.list[33,34,35,36,37,38,39].dt_txt);
            var currentWind = response.list[33,34,35,36,37,38,39].wind.speed;
            var currentHumidity = response.list[33,34,35,36,37,38,39].main.humidity;
            var currentTemp = response.list[33,34,35,36,37,38,39].main.temp;

            var currentDate5 = $('<li>');
            var currentWind5 = $('<li>');
            var currentHumidity5 = $('<li>');
            var currentTemp5 = $('<li>');

            currentDate5.text("Date:" + " " + currentDate);
            currentWind5.text("Wind Speed:" + " " + currentWind + " " + "mph");
            currentHumidity5.text("Humidity:" + " " + currentHumidity + " " + "%");
            currentTemp5.text("Temp:" + " " + currentTemp + " " + "F°");

            list5.append(currentDate5);
            list5.append(currentWind5);
            list5.append(currentHumidity5);
            list5.append(currentTemp5);
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
