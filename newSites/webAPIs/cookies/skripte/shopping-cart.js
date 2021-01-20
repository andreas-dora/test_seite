// Datei: shopping-cart.js Listing: 12.18

console.log('shopping-cart');

createCookie('username', 'Musterbursch', 7);
createCookie('shoppingCartItemIDs', '22345,22445,22845', 7);

showUsername();
showShoppingCart();

function showUsername(){
  let username = readCookie('username');
  document.getElementById('username').textContent = username;
}

function showShoppingCart(){
  let ids = readCookie('shoppingCartItemIDs').split(',');
  let itemsElement = document.getElementById('shopping-cart-items');
  ids.forEach(function (id){
    let item = catalog[id];
    let itemElement = document.createElement('li');
    itemElement.appendChild(document.createTextNode(item.name));
    itemsElement.appendChild(itemElement);
  });
  document.getElementById('shopping-cart-item-count').textContent = ids.length;
}