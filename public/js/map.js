
// create map
var mymap = L.map('map').setView([30.411804, -91.180910], 7);
L.tileLayer.provider('Stamen.Toner').addTo(mymap); //Stamen.TonerLite

// create custom markers
var markerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// load GeoJSON from an external file
$.getJSON("locations.json",function(data){

  // add popups
  function onEachFeature(feature, layer) {
      layer.bindPopup("<b> Name: </b>" + feature.properties.name + "<br>" + "<b>Location: </b>" + feature.properties.location);
  }

  // add GeoJSON layer to the map once the file is loaded
  geojson = L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: markerIcon});
		},
    onEachFeature: onEachFeature
  }).addTo(mymap)
  // mymap.fitBounds(geojson.getBounds(), {padding: L.point(20, 20)});
  // mymap.invalidateSize();
});
