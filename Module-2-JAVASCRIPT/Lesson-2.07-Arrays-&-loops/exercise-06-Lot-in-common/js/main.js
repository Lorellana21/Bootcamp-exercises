'use strict';

const submitElement = document.querySelector (".button");


function getWorks(event){
  event.preventDefault(); //para que no envíe el formulario
  const works = [];
  const work1 = document.querySelector ('.work1');
  const work2 = document.querySelector ('.work2');
  works[0] = work1.value;
  works[1] = work2.value;
  
  for (const work of works){
    console.log(`¡A mí también me encantó ${work}! Tenemos mucho en común, humana.`)
  }
}
submitElement.addEventListener("click", getWorks);


