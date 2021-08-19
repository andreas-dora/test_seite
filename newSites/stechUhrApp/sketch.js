const startBtn = document.getElementById('startBtn').addEventListener('click', getDataFun);
const formular = document.getElementById('myForm');
formular.addEventListener('submit', preventFun);

function preventFun(e){
    e.preventDefault();
    console.log('klingKLong');
}

function getDataFun(e){
    console.log(e.target.value);
    console.log(formular.username.value)
}