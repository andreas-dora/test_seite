loadJason("http://api.open-notify.org/astros.json", dataComplete);


function dataComplete(){
    alert("Daten vollständig geladen");
}

// http://api.open-notify.org

// console.log("about to fetch a Flower");

// catchFlower()
// .then(response => {
//     console.log('yay');
// })
// .catch(error => {
//     console.log('error!');
//     console.log(error);
// });
// async function catchFlower(){
//     const response = await fetch('flower.jpg');
//     const blob = await response.blob();
//     document.getElementById('flower').src = URL.createObjectURL(blob);
// }

// fetch('flower.jpg')
// .then(response =>{
//     console.log(response);
//     return response.blob();
// })
// .then(blob => {
//     console.log(blob);
//     document.getElementById('flower').src = URL.createObjectURL(blob);
// });