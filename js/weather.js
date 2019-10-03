var l = window.localStorage;
var b = l.getItem("Coord");
function testfunc(){
    console.log(b);
}
var coordin = b.split(',');
var lng = parseFloat(coordin[1]);
var lat = parseFloat(coordin[0]);
var wea;
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'

function showweather(){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&APPID=bef04cf403a1fc9148df2aa15f5f9720&units=metric", function (data) {
        console.log(data);
        console.log(weather.main.temp);
        $(".city").append(name + " ");
        $(".temperature").append(temp + " ");
        $(".weatherdescription").append(field + " ");
    })
}
