var celciusDegree = 0;
//jQuery is required to run this code
$(document).ready(function () {
  celsiusOrfahrenheit();
  if (navigator.geolocation) { // If the location was allowed
    navigator.geolocation.getCurrentPosition(function (position) { // This is done to fetch the latitude and the longitude
      // It's going to be in this way because, the api from fcc needs these variables
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      weather(lat, long);    
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});

/* Getting the latitude and the longitude */

function weather(lat, long) {
  // Using now the ajax to fetch the current weather
  var urlString = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long; // Entire link to the API
  $.ajax({
    url: urlString,
    success: function (data) {
      $(".switch").css("display", "inline-block");
      $(".switch").addClass("animated pulse");
      $(".cityName").text(data.name);
      $(".cityName").addClass("animated fadeInDownBig");
      $(".countryName").text(" - " + data.sys.country);
      $(".countryName").addClass("animated fadeInDownBig");
      $(".degree").text(Math.round(data.main.temp) + " °");
      $(".degree").addClass("animated fadeInDownBig");
      celciusDegree = Math.round(data.main.temp);
      $(".description").text(data.weather[0].main);
      $(".description").addClass("animated fadeIn");
      $("footer p").css("display","block");
      changeWeatherIcon($(".description").html()); // Function to change the icon according to the local weather 
    },
  })
}


function celsiusOrfahrenheit() {
  $(".switch input").click(function () {
    var c = $(".degree").text().substr(0, $(".degree").text().length - 1);
    var f = Math.round((c * 1.8 + 32));
    if ($("input").prop("checked")) {
      $(".degree").text(f + " °");
    } else {
      $(".degree").text(celciusDegree + " °");
    }
  })
}

function changeWeatherIcon(description) {
  $(".weather").hide();
  var date = new Date();
  description = description.toLowerCase();
  if (date.getHours() >= 18 || date.getHours() <= 4) {
    switch (description) {
      case "clear": $(".night").css('display', 'block');
        break;
      case "clouds": $(".cloudyNight").css('display', 'block');
        break;
      case "rain": $(".rainyNight").css('display', 'block');
        break;
      case "snow": $(".snowyNight").css('display', 'block');
        break;
      case "drizzle": $(".drizzleNight").css('display', 'block');
        break;
      case "thunderstorm": $(".thunder").css('display', 'block');
        break;
    }
  } else {
    switch (description) {
      case "clear": $(".day").css('display', 'block');
        break;
      case "clouds": $(".cloudyDay").css('display', 'block');
        break;
      case "rain": $(".rainyDay").css('display', 'block');
        break;
      case "snow": $(".snowyDay").css('display', 'block');
        break;
      case "drizzle": $(".drizzleDay").css('display', 'block');
        break;
      case "thunderstorm": $(".thunder").css('display', 'block');
        break;
    }
  }
}
