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

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the earthquake layer for our map.
let earthquakes = new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
  Earthquakes: earthquakes
};

// Then we add a control to the map that will allow the user to change
// which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
        console.log(data);
        return L.circleMarker(latlng);
      },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each circleMarker to display the magnitude and
    // location of the earthquake after the marker has been created and styled.
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
  }
}).addTo(earthquakes);
  // Then we add the earthquake layer to our map.
  earthquakes.addTo(map);
});

// Create a style for the lines.
// let myStyle = {
//     color: "#FFFFA1",
//     weight: 2
// }

// Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//     // We turn each feature into a circleMarker on the map.
//     pointToLayer: function(feature, latlng) {
//                 console.log(data);
//                 return L.circleMarker(latlng);
//             },
//           // We set the style for each circleMarker using our styleInfo function.
//         style: styleInfo
//         }).addTo(map);
//     });

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    if (magnitude > 3) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
      return "#eecc00";
    }
    if (magnitude > 1) {
      return "#d4ee00";
    }
    return "#98ee00";
  }

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