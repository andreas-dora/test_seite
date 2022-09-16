const routeForm = document.getElementById('routeFormID');
routeForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
}



mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhc2RvcmEiLCJhIjoiY2t0OTVrOXllMThvYzJ1cWx0cjNrajh6ciJ9.VtVXGZ5lB83a-70qOnBk_g';
const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient.geocoding
    .forwardGeocode({
        query: 'Wollzeile 34, Wien, Östereich',
        autocomplete: false,
        limit: 1
    })
    .send()
    .then((response) => {
    if (
        !response ||
        !response.body ||
        !response.body.features ||
        !response.body.features.length
    ) {
        console.error('Invalid response:');
        console.error(response);
        return;
    }
const feature = response.body.features[0];
console.log(feature);
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: feature.center,
    zoom: 10
});
 
new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
const scale = new mapboxgl.ScaleControl({
    maxWidth: 200,
    unit: 'metric'
    });
    map.addControl(scale);
});
