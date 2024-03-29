// Add console.log to check to see if our code is working. 
console.log("working")

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});



// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/jasmith1503/Mapping_Earthquakes/main/majorAirports.json";

// // Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the Toronto neighborhoods GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/jasmith1503/Mapping_Earthquakes/main/torontoNeighborhoods.json";
// let torontoHoods = "https://raw.githubusercontent.com/jasmith1503/Mapping_Earthquakes/torontoNeighborhoods.json"
//let torontoHoods = "https://github.com/jasmith1503/Mapping_Earthquakes/blob/0f938b12e35d395c7db9fc3f211826d3b4de6f4a/torontoNeighborhoods.json"

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });

// Create a style for the lines.
// let myStyle = {
//     color: "#FFFFA1",
//     weight: 2
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
// // Creating a GeoJSON layer with the retrieved data. 
//     l.geoJson(data).addTo(map);
// }); 

// L.geoJson(data, {
//     style: myStyle,
//     // color: "#FFFFA1", 
//     // weight: 2,
//     onEachFeature: function(feature, layer) {
//         layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3>");
//     }
// })
// .addTo(map);
//   // Creating a GeoJSON layer with the retrieved data.
//   //L.geoJSON(data).addTo(map);
// });