"use strict";

const btn = document.querySelector(".btn");
let interval;

function updateClock(){
  //console.log("hola"); en la consola se ve como pasan los segundos
  const today  = new Date();
  //console.log(today.getHours(),today.getMinutes(),today.getSeconds());
  const hours = document.querySelector(".js-hours");
  const minutes = document.querySelector(".js-minutes");
  const seconds = document.querySelector(".js-seconds");
  hours.innerHTML = today.getHours().toString().padStart(2,"0");
  minutes.innerHTML = today.getMinutes().toString().padStart(2,"0");
  seconds.innerHTML = today.getSeconds().toString().padStart(2,"0");
}

//Creo una variable para guardar el setInterval
interval = setInterval(updateClock,1000);//se ejecuta al pasar un segundo
updateClock();//para que se ejecute al cargar la página

btn.addEventListener("click",()=>{
  clearInterval(interval);
});