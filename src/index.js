'use strict';

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoibW9tb2IiLCJhIjoiY2o4YnJlMXZlMDEwdzMzbzB1bzMwNmhyaCJ9.iP2BkAmejYEP4qPuxiSBJw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const newDomEl = document.createElement("div");
newDomEl.style.width = '32px';
newDomEl.style.height = '39px';
newDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(newDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker("hotels", [-74.00912, 40.7051]);
console.log(marker);
marker.addTo(map);