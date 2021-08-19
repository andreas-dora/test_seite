function init(){
    // const form = document.getElementsById('planForm');
    // form.addEventListener('click', onSubmit);
    const diesesJahr = new Date().getFullYear();
    const jahrIn = document.getElementById('jahrInput');
    jahrIn.value = diesesJahr;
    const createBtn = document.getElementById('createBtn');
    createBtn.addEventListener('click', onSubmit);
    const monatInput = document.getElementById('monatInput');
    const jahrInput = document.getElementById('jahrInput');
    function onSubmit(e){
        e.preventDefault();

        let derMonat = new Date(jahrInput.value, monatInput.value);
        let month = derMonat.getMonth();
        let year = derMonat.getFullYear();
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        console.log('Das Datum: ' + derMonat);
        console.log('Das daysInMonth: ' + daysInMonth);
    }
}



document.addEventListener('DOMContentLoaded', init);