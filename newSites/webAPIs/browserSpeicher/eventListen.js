window.addEventListener('storage', (e) => {
  console.log(e.key); 
  console.log(e.oldValue);
  console.log(e.newValue);
  console.log(e.url);
  console.log(e.storageArea);
});