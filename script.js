
mapboxgl.accessToken = 'pk.eyJ1Ijoic29maWVuOTEiLCJhIjoiY2trc3hxbDViMTdxbTJucW5sbW94dm81eiJ9.HQx1ECiAlZ-PfBWLW2rTdw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-76.5662, 39.3485], 
zoom: 9 
});
var marker = new mapboxgl.Marker()
  .setLngLat([-76.5662, 39.3485])
  .addTo(map); 