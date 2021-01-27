const sectionOne =document.querySelector('section1');
const sections = document.querySelectorAll('section');

const options = {
  root: null, // the viewport (default)
  threshold: 0,  // zwischen Null und 0.4 (geht los wenn soviel im viewport ist)
  rootMargin: "-150px" 
 };

const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    }
    console.log(entry.target);  //-------AUSCHALTEN
    entry.target.classList.toggle("inverse");
    observer.unobserve(entry.target); //  nach dem Auslösen nicht mher beobachten
  });
}, options);

// observer.observe(sectionOne)

sectionOne.forEach(section => {
  observer.observe(section);
});