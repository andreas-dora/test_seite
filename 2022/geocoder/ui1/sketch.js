const zeitFeld = document.getElementById("time");
const datumFeld = document.getElementById("date");
var myH;
function tellTime(){
    let now = new Date();
    myH = now.getHours();
    zeitFeld.innerText = now.toLocaleTimeString('de-De',{  
      hour: '2-digit',
      minute: '2-digit'
    });
    datumFeld.innerText = now.toLocaleDateString('de-DE',{
      day: '2-digit',
      month: '2-digit'
    });
    
  };

function init(){
    function init(){
        routeForm = document.getElementById('routeFormID');
        routeForm.addEventListener('submit', (e) => {
          e.preventDefault();
        });
        routeForm.submitBtn.addEventListener('click', getRoute);
        const start = [8.7665093, 50.098195]; // Waldstr 80
        const end = [8.6693886, 50.1063468]; // Gutleustr. 32
      
        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhc2RvcmEiLCJhIjoiY2t0OTVrOXllMThvYzJ1cWx0cjNrajh6ciJ9.VtVXGZ5lB83a-70qOnBk_g';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            center: [8.759833, 50.10344], 
            zoom: 13 
        });
        const markerSt = new mapboxgl.Marker()
        // .setLngLat([8.770833, 50.099444])
        .setLngLat([start[0], start[1]])
        .addTo(map);
        const MarkerZiel = new mapboxgl.Marker()
        .setLngLat([end[0], end[1]])
        .addTo(map);
      console.log('heello from init');
      
      
      
      async function getRoute() {
        console.log('dingDong');
        // make a directions request using cycling profile
        // an arbitrary start will always be the same
        // only the end or destination will change
      
        // exclude: ferry,
        const query = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&language=de&geometries=geojson&access_token=${mapboxgl.accessToken}`,
          { method: 'GET' }
        );
        const json = await query.json();
        const data = json.routes[0];
        console.log(data);
        const route = data.geometry.coordinates;
        const geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };
        // if the route already exists on the map, we'll reset it using setData
        if (map.getSource('route')) {
          map.getSource('route').setData(geojson);
        }
        // otherwise, we'll make a new request
        else {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: geojson
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#ffd700',
              'line-width': 5,
              'line-opacity': 0.75
            }
          });
        }
        // add turn instructions here at the end
        const instructions = document.getElementById('instructions');
        const steps = data.legs[0].steps;
        
        let tripInstructions = '';
        for (const step of steps) {
          tripInstructions += `<li>${step.maneuver.instruction}</li>`;
        }
        instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
          data.duration / 60
        )} min 🚴 </strong></p><br><p><strong>Dauer Normal: ${Math.floor(
          data.duration_typical / 60
        )} min 🚴 </strong></p><br><p><strong>Entfernung: ${data.distance} min 🚴 </strong></p> <ol>${tripInstructions}</ol>`;
      }
      
      }
      
      document.addEventListener('DOMContentLoaded', init);
       


//     const inForm = document.getElementById('inputForm');
//     inForm.addEventListener('submit', onSubmit);
//     const sideMenu = document.getElementById('sideMenu');
//     const navBtn = document.getElementById('routeBtn');
    
//     navBtn.addEventListener('click', openNav);
// }

// function onSubmit(e){
//     e.preventDefault();
// }

// function openNav(){
//     console.log("pip");
//     sideMenu.style.width = "250px";
}

document.addEventListener('DOMContentLoaded', init);
setInterval(tellTime, 1000);