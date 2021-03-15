const form = document.querySelector('form');
const city = getElementById('id_city');
const street = getElementById('id_street');
const hnr = getElementById('id_hnr');
const suche = getElementById('id_suche');
// const signinButton = document.querySelector('button#sign-in');

form.addEventListener('submit', handleFormSubmission);                       

function handleFormSubmission(event) {
  event.preventDefault();
  var volleSuche = city.value.concat(" ", street.value);
  console.log(volleSuche);
}
