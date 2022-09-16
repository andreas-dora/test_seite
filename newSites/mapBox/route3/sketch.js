function init(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhc2RvcmEiLCJhIjoiY2t0OTVrOXllMThvYzJ1cWx0cjNrajh6ciJ9.VtVXGZ5lB83a-70qOnBk_g';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: [8.759833, 50.10344], 
        zoom: 14 
    });
    const inForm = document.getElementById('inForm');
    const outForm = document.getElementById('outForm');

    inForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
  
    var startCity = 'Offenbach am Main, Germany';
    const startStreet = inForm.startStreet;
    var startAdd = `${startStreet}, ${startCity}`;

    const getStartBtn = document.getElementById('getStart').addEventListener('click', getStart);

    function getStart(){
        console.log('Start: ' + startStreet.value);
        outForm.outStart.value = 'Start: ' + startStreet.value;


        mapboxClient.geocoding
            .forwardGeocode({
                query: `${startStreet}, ${startCity}`,
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
    });

const start = response.body.features[0];
console.log(start);
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: feature.center,
//     zoom: 10
// });
}

}


document.addEventListener('DOMContentLoaded', init);

/*

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

const start = response.body.features[0];
console.log(start);
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
*/
