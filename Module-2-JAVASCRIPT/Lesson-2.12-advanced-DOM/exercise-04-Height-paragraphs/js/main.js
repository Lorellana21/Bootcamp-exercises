'use strict';


const paragraph = document.querySelector ('.paragraph');


  let elemHeight = paragraph.offsetHeight;
  console.log(elemHeight);
  let newHeight = paragraph.style.height = `${elemHeight/3}px`;
  console.log(newHeight);



