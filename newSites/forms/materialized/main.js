const TxApp = {};

TxApp.init = function(){
    console.log('hello, from init');
    TxApp.staA = document.getElementById('id_stA');
    TxApp.txForm = document.getElementById('id_txForm');
    TxApp.txForm.addEventListener('submit', TxApp.dontSubmit);
    var elems = document.querySelectorAll('select');
    TxApp.stStreet = document.getElementById('id_stSt');
    TxApp.stStreet.addEventListener('input', TxApp.setStA);
    TxApp.stCity = document.getElementById('id_stC');
    TxApp.stCity.addEventListener('change', TxApp.changeStC)
 //   var instances = M.FormSelect.init(elems, options);
    var instances = M.FormSelect.init(elems);
    var autos = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(autos, adressen);
}


const adressen = {
    "Aalbach": null,
    "Bebach": null,
    ", Mühlheim am Main": ["Aa Str Mühlheim", "Bstr Mühl"],
    ", Frankfurt am Main": ["A Fra", "Bfra"],
    ", Offenbach am Main": ["Aoffe, BOffe"]
}

TxApp.setStA = function(){
    TxApp.staA.value = TxApp.stStreet.value + TxApp.stCity.value;
}
TxApp.changeStC = function(){
    console.log('Hello from changeStC');
    TxApp.staA.value = TxApp.stStreet.value + TxApp.stCity.value;
}
TxApp.dontSubmit = function(e){
    e.preventDefault();
}
document.addEventListener('DOMContentLoaded', TxApp.init);
 
