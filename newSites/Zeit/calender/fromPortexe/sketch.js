var nav = 0;
var clicked = null;
var events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const container = document.getElementById('container');
;
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openModal(date) {
    clicked = date;
  
    const eventForDay = events.find(e => e.date === clicked);
  
    if (eventForDay) {
      document.getElementById('eventText').innerText = eventForDay.title;
      deleteEventModal.style.display = 'block';
    } else {
      newEventModal.style.display = 'block';
    }
  
    backDrop.style.display = 'block';
  }

  /*##########################################*/
/*##########################################*/
/*##########################################*/

function closeModal(){
    newEventModal.style.display = 'none';
    backDrop.style.display = 'none';
    eventTitleInput.value = '';
    clicked = null;
    load();
}

  /*##########################################*/

  function saveEvent() {
    if (eventTitleInput.value) {
      eventTitleInput.classList.remove('error');
  
      events.push({
        date: clicked,
        title: eventTitleInput.value,
      });
  
      localStorage.setItem('events', JSON.stringify(events));
      closeModal();
    } else {
      eventTitleInput.classList.add('error');
    }
    closeModal();
  }


  /*##########################################*/

  function deleteEvent() {
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  }
  
/*##########################################*/


  /*##########################################*/
/*##########################################*/
/*##########################################*/

function load(){
    calendar.innerHTML = '';
    const mDisplay = document.getElementById('monthDisplay');
    const dt = new Date();

    if(nav !== 0){
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const daysInMonth = new Date(year, month +1, 0).getDate();
    console.log(daysInMonth);

    const firstDayOfMonth = new Date(year, month);

    console.log(firstDayOfMonth);
    const displayMonat = firstDayOfMonth.toLocaleDateString('de-de', {
        month: 'long',
        year: 'numeric'
    });
    const dateString = firstDayOfMonth.toLocaleDateString('en-us',{
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
        }
    );
    mDisplay.textContent = displayMonat;
    console.log('My date string: ', dateString);

    // const paddingDays = dateString.split(', '[0]);
    // const paddingDays = weekdays.indexOf('Saturday');

    // const paddingDays = weekdays.indexOf(dateString.split(','[0]));
    const paddingDays = (firstDayOfMonth.getDay() + 6)%7;
    for(let i =1; i<= paddingDays +daysInMonth; i++){
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        // const eventForDay = events.find(e => e.date === dayString);
        if(i > paddingDays){
            daySquare.innerText = i - paddingDays;
            daySquare.addEventListener('click', () => openModal(`${i-paddingDays}.${month + 1}.${year}`));
            daySquare.addEventListener('click', () => console.log(`${i-paddingDays}.${month + 1}.${year}`));

        } else {
            daySquare.classList.add('padding');
        }
        container.appendChild(daySquare);
    }


    // console.log('Suche nach: ' + dateString.split(', '[0]));
    // console.log('paddingDays: ' + paddingDays);
    // console.log('Wochentagszahl: ' + firstDayOfMonth.getDay());
}


  /*##########################################*/
/*##########################################*/
/*##########################################*/
function btnInit(){
    document.getElementById('backButton').addEventListener('click', () =>{
        nav--;
        console.log(nav);
        load();
    });
    document.getElementById('nextButton').addEventListener('click', () =>{
        nav++;
        console.log(nav);
        load();
    });
    document.getElementById('cancelButton').addEventListener('click', closeModal);
    document.getElementById('saveButton').addEventListener('click', saveEvent);
}

  /*##########################################*/
/*##########################################*/
/*##########################################*/
btnInit();
load();