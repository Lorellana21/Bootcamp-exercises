'use strict';


const links = document.querySelectorAll('.link');
const startSection = document.querySelector ('.start');
const aboutSection = document.querySelector('.about');
const contactSection = document.querySelector('.contact');


function stopLink(event){

  event.preventDefault();
  
  const h2 = event.target.dataset.id;
  

  if(h2 === "start"){
    //information about the size of an element and its position relative to the viewport.
    let position1 = startSection.getBoundingClientRect();
    window.scrollTo(position1.x, position1.y);
  } else if (h2 === "about"){
    let position2 = aboutSection.getBoundingClientRect();
    console.log(position2);
    window.scrollTo(position2.x, position2.y);
  } else if (h2 === 'contact'){
    let position3 = contactSection.getBoundingClientRect();
    window.scrollTo(position3.x,position3.y); 
}
}


for(const link of links){
  link.addEventListener("click", stopLink);
}



