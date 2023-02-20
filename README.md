# Mapping_Earthquakes
Module 14 Challenge - Mapping Earthquake data

## Resources
Operating Platform: Windows 11 Pro - Build 22621 [Buy Windows 11 Pro](https://www.microsoft.com/en-us/d/windows-11-pro/dg7gmgf0d8h4?rtc=1)</br>
IDE Software: [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=vscom_downloads) Verison 1.75.1</br>
Completed Javascript File: [Major Earthquake JS](Mapping_Earthquakes/Earthquake_Challenge/static/js/major_eq_starter_logic.js)</br>
Mapbox Maps via API: [Learn More](https://www.mapbox.com/maps)</br>
7 Day Global Earthquake List: [USGS.Gov](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson) </br>
7 Day Global Earthqakes > 4.5 Magnitude: [USGS.Gov](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson)</br>
Tectonic Plate geoJSON data: [TectonicPlates](https://github.com/fraxen/tectonicplates), [Specific geoJSON Dataset](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json) </br>

## Overview
Using USGS (Unites States Geological Survey) website & API feeds, the previous weeks worth of Earthqakes are mapped using the data from Mapbox to overlay using Javascript. Several maps were created using different Tile Layers (Satallite, Street, & Dark) along with different selectors to view the information. 

Included is a completed map showing all three layers (Earthquakes within the 7 days, Tectonic Plate, & Earthquakes with a maginatude of greater than 4.5) from a Street view. </br>
![All 3 Layers](\Earthquake_Challenge\Resources\completed3Layers.jpg)

This shows only the last weeks worth of Earthquakes using the Street View </br>
![All 3 Layers](\Earthquake_Challenge\Resources\completedEarthquakesOnly.jpg)

Here is a breakdown of the Tectonic Plates using Satalittle imagagry</br>
![Tectonic Plates](\Earthquake_Challenge\Resources\completedTechPlates.jpg)

The last slide is a showing of all of the Earthquakes with a maginatude of greather than 4.5 on the Richter Scale in Dark mode. </br>
![All 3 Layers](\Earthquake_Challenge\Resources\completedMajorEQ.jpg)
