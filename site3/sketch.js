const init = function(){
    document.getElementById('button-reset').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);

}

const reset = function(ev){
    ev.preventDefault();
    document.getElementById('message-form').reset();
}

const send = function(ev){
    ev.preventDefault();
    let ret = validate();

    if(ret){
        document.getElementById('message-form').submit();

    }else{
        let err = document.querySelector('.error');
        let input = err.querySelector('input');
        err.setAttribute('data-errormsg', `... Missing $(input.placeholder)`);
    }

}

const validate = function(ev){
    let valid = false;
  //  let chk = document.getElementById('input-alive');
    let first = document.getElementById('firstName');
    let last = document.getElementById('lastName');
    let mail = document.getElementById('email');

    return valid;

}

document.addEventListener('DOMContentLoaded', init);