const startSt = document.getElementById('id_stStr');

console.log(startSt);

var schwester = startSt.nextElementSibling;

console.log(schwester);

var tante = document.getElementById('cS1');

console.log(tante);

var nichte = tante.firstElementChild;

console.log(nichte);
console.log(nichte.value);

console.log('all at onece: ' +  startSt.nextElementSibling.firstElementChild.value)