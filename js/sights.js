var entries = {
    mysore_palace : [12.305135, 76.655146],
    virTem : [15.335119, 76.458972],
    lalbagh : [12.951109,77.584809],
    abbey_falls : [12.458427,75.716624],
    cubbon_park : [12.458427,77.592933],
    brindavan_gardens : [12.421914,76.572505],
    bang_palace : [12.999111,77.592171],
    dubare_forest : [12.370657, 75.905410],
    Bannerghatta : [12.800270, 77.577013],
    kudremukh : [ 13.184270, 75.319390],
    jog_falls : [ 14.226236, 74.807459 ],
    tipu_palace : [12.959634,77.573620],
    shiv_falls : [12.302832,77.177202],
    raja_seat : [12.414483,75.736957],
    chamundi_hills : [12.272784,76.670852],
    mysore_zoo : [12.302557,76.663935],
    bhadra_sanct : [13.695377, 75.636343],
    nisargadhama : [12.446068, 75.937350],
    vidhana : [12.980004,77.591238],
    badami : [15.916534, 75.691102],
    gol : [16.830262, 75.736114],
    vijaya : [15.342597,76.475330],
    namdroling : [12.431041,75.966561],
    ranganathittu : [12.424241,76.656763],
    museum : [12.975530,77.596366],
    cathedral : [12.321388,76.658253],
    krs : [12.425479, 76.572438],
    jaganmohan : [12.307084,76.649839],
    kukke : [12.664023,75.615866],
    karanji : [12.298396,76.672281],
    nandi : [12.284660,76.667944],
    mahabaleshwar : [14.543806,74.316398],
    sringeri : [13.418809,75.252083],
    Hornadu : [13.277677, 75.343823],
    Dharmasthala : [12.950550, 75.380563],
    Pattadkal_temples : [15.949072, 75.816307],
    Aihole : [16.019725, 75.884199],
    Agumbe : [13.496650, 75.080652],
    bandipur : [11.769161, 76.547662],
    fort : [14.216052, 76.398916]
}
var l,a;
l = window.localStorage;

function disp(){
    document.getElementById("hi2").innerHTML = entries.abbey_falls
}
function getcoord(list1){
    l.setItem("coord",list1);
    $('#FrameID').attr('src', "../map.html?coord="+list1);
}
function getweather() {
    b=l.getItem("coord");
    c=b.split(",");
    latitude = parseFloat(c[0]);
    longitude = parseFloat(c[1]);

    //location.innerHTML =
      //"Latitude is " + latitude + "° Longitude is " + longitude + "°";
  var apiKey = "bdd74ce4713b6f29757847ce4861b47b";
  var url = "https://api.forecast.io/forecast/";
    $.getJSON(
      url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
      function(data) {
        $("#temp").html(data.currently.temperature + "° F");
        $("#summary").html(data.currently.summary);
        $("#humidity").html(data.currently.humidity);
        
      }
    );
  }
