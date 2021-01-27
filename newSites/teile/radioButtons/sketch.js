const message = document.getElementById('message');
var orderForm = document.getElementById('orderForm');
var radioBtns = orderForm.order;
for(let i = 0; i < radioBtns.length; i++){
  radioBtns[i].addEventListener('change', (e) => {
    console.log(e.target.value);
    message.innerText = e.target.value;
  });
} 