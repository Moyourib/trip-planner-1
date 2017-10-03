//take in a type, coords, based on type, shoud have a different marker(icon links) attached to it
//require ./marker.js into the src/index.js file
'use strict';

const mapbox = require("mapbox-gl");

const iconURLs = {
	activity: "http://i.imgur.com/WbMOfMl.png",
	hotels: "http://i.imgur.com/D9574Cu.png",
	restaurant: "http://i.imgur.com/cqR6pUI.png"
}

const buildMarker = (type, coords) => {
	console.log(type);
	const link = iconURLs[type];
	console.log(iconURLs);
	console.log(link);
	const marker = document.createElement("div");
	marker.style.width = '32px';
	marker.style.height = '39px';
	marker.style.backgroundImage = 'url(' + link + ')';
	console.log(marker);
	// new mapbox.Marker(marker).setLngLat(coords);
	return new mapbox.Marker(marker).setLngLat(coords);
};

module.exports = buildMarker;

