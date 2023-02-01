
let NameTZ = document.getElementById('NameTZ');
let latitude = document.getElementById('lat');
let longitude = document.getElementById('lon');
let offsetSTD = document.getElementById('offsetSTD');
let offsetSTDSeconds = document.getElementById('offsetSTDSeconds');
let offsetDST = document.getElementById('offsetDST');
let offsetDSTSeconds = document.getElementById('offsetDSTSeconds');
let country = document.getElementById('country');
let postcode = document.getElementById('postcode');
let city = document.getElementById('city');

let lat = 0;
let lon = 0;
function getLocation() {
  
    navigator.geolocation.getCurrentPosition(showPosition);
  
}
function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  fetch(`https://api.geoapify.com/v2/place-details?lat=${lat}&lon=${lon}&apiKey=a45b21602c5d41e4a161bd853e2e35e0`)
    .then(resp => resp.json())
    .then(data => {
      NameTZ.innerText = "Name of Time Zone : " + JSON.stringify(data.features[0].properties.timezone.name)
      latitude.innerText = "Lat : " + JSON.stringify(data.features[0].properties.lat)
      longitude.innerText = "Long : " + JSON.stringify(data.features[0].properties.lon)
      offsetSTD.innerText = "Offset STD : " + JSON.stringify(data.features[0].properties.timezone.offset_STD)
      offsetSTDSeconds.innerText = "Offset STD Seconds : " + JSON.stringify(data.features[0].properties.timezone.offset_STD_seconds)
      offsetDST.innerText = "Offset DST : " + JSON.stringify(data.features[0].properties.timezone.offset_DST)
      offsetDSTSeconds.innerText = "Offset DST Seconds : " + JSON.stringify(data.features[0].properties.timezone.offset_DST_seconds)
      country.innerText = "Country: " + JSON.stringify(data.features[0].properties.country)
      postcode.innerText = "Postcode : " + JSON.stringify(data.features[0].properties.postcode)
      city.innerText = "City : " + JSON.stringify(data.features[0].properties.city)

    });
}
getLocation();





