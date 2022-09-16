const timeDiv = document.getElementById('timeDiv');
function init(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhc2RvcmEiLCJhIjoiY2t0OTVrOXllMThvYzJ1cWx0cjNrajh6ciJ9.VtVXGZ5lB83a-70qOnBk_g';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [8.759833, 50.10344], 
    zoom: 14 
});
}

function tellTime(){
    myTime = new Date().toLocaleTimeString('DE-de',{  hour: '2-digit',
    minute: '2-digit'    });
    timeDiv.textContent = myTime;
}

document.addEventListener('DOMContentLoaded', init);
setInterval(tellTime, 1000);