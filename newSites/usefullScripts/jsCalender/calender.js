var nav = 0;
var clicked = null;
var events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calender = document.getElementById('calendar');
const wochentage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const weekfdays =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function load(){
    const dt = new Date();
    console.log(dt);
}

load();