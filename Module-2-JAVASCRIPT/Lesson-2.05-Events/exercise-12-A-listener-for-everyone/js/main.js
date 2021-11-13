'use strict';

const listElement = document.querySelector (".teachers");

function teacherFavorite(e){
  const clickedTeacher = e.target;
  clickedTeacher.classList.toggle("teacher--selected");
  console.log('El target es el elemento clickado', e.target);
  console.log('El current target es el elemetno escuchado', e.currentTarget);
}

listElement.addEventListener("click", teacherFavorite);



