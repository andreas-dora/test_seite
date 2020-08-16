const passwordInput = document.getElementById('pwd');
const togglePasswordButton = document.getElementById('pwdBtn');

togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.innerHTML = '<i class="far fa-eye"></i>';
    togglePasswordButton.setAttribute('aria-label',
      'Hide password.');
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.innerHTML = '<i class="far fa-eye-slash"></i>';
    togglePasswordButton.setAttribute('aria-label',
      'Show password as plain text. ' +
      'Warning: this will display your password on the screen.');
  }
}


passwordInput.addEventListener('input', resetCustomValidity); 
function resetCustomValidity() {
  passwordInput.setCustomValidity('');
}

// A production site would use more stringent password testing. 
function validatePassword() {
  let message= '';
  if (!/.{8,}/.test(passwordInput.value)) {
		message = 'At least eight characters. ';
  }
	if (!/.*[A-Z].*/.test(passwordInput.value)) {
		message += 'At least one uppercase letter. ';
  }
	if (!/.*[a-z].*/.test(passwordInput.value)) {
		message += 'At least one lowercase letter.';
  }
  passwordInput.setCustomValidity(message);
}

const form = document.querySelector('form');
const signinButton = document.querySelector('button#sign-in');

form.addEventListener('submit', handleFormSubmission);                       

function handleFormSubmission(event) {
  event.preventDefault();
  validatePassword();
  form.reportValidity();
  if (form.checkValidity() === false) {
  } else {
    // On a production site do form submission.
    alert('Logging in!')
    signinButton.disabled = 'true';
  }
}











// const passIn = document.getElementById('pwd');
// const passBtn = document.getElementById('pwdBtn');
// passBtn.addEventListener('click', togglePass);
// passIn.addEventListener('input', resetCustomValidation);

// function resetCustomValidation(){
//   passIn.setCustomValidity('');
// }

// function validatePassword() {
//   let message= '';
//   if (!/.{8,}/.test(passwordInput.value)) {
// 		message = 'Mindestens acht Zeichen. ';
//   }
// 	if (!/.*[A-Z].*/.test(passwordInput.value)) {
// 		message += 'Mindestens ein Großbuchstabe. ';
//   }
// 	if (!/.*[a-z].*/.test(passwordInput.value)) {
// 		message += 'Mindestens ein KLeinbuchstabe.';
//   }
//   passwordInput.setCustomValidity(message);
// }

// const form = document.querySelector('form');
// const signButton = document.querySelector('button#id_signInBtn');
// form.addEventListener('submit', handleFormSubmission);

// function handleFormSubmission(event){
//   event.preventDefault();
//   validatePassword();
//   form.reportValidity();
//   if(form.checkValidity() === false){ 
//   } else {
//     alert('login in!');
//     signButton.disabled = 'true';

//   }
// }

// function togglePass(){
//   if (passIn.type === 'password'){
//     passIn.type ='text';
//     passBtn.innerHTML ='<i class="far fa-eye-slash"></i>';
//     passBtn.setAttribute('aria-label', 'Passwort anzeigen');
//   }
//    else {
//     passIn.type ='password';
//     passBtn.innerHTML ='<i class="far fa-eye"></i>';
//     passBtn.setAttribute('aria-label', 'Passwort verbergen');
//   }
// }