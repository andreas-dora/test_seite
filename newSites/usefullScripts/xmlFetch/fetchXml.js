"use strict";

function fetchData(){
    fetch('https://lakhs.notdienst-portal.de/lakhsportal/xmlschnittstelle/standort/ergebnis?emergencyCount=4&lat=50.09563620000001&lon=8.776084299999999&dayCount=2&key=1621532112616_-2028760173')
    .then(response =>{
        console.log(response);
        if(!response.ok){
            throw Error("HOSSA");
        }
        return response.xml()
    })
    .then(data => {
        console.log(data.data);

    })
    .catch(error =>{
        console.log(error)
    });
}

fetchData();