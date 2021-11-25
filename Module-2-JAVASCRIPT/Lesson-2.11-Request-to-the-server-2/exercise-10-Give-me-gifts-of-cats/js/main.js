'use strict';


const formElement = document.querySelector ('.js-form');
const bodyElement = document.querySelector ('.js-body');


function handleTheme(event){
    const radioSelected = event.target.value;
    console.log(radioSelected);
    bodyElement.classList.remove("LigthBackgroundDarkText", "DarkbackgroundLightText")
    if(radioSelected === "light"){
       bodyElement.classList.add("LigthBackgroundDarkText");
    } else {
        bodyElement.classList.add("DarkbackgroundLightText");
    }
    localStorage.setItem('theme', `${radioSelected}`);

} 

formElement.addEventListener("click", handleTheme)

const savedTheme = localStorage.getItem('theme');
if(savedTheme === "light"){
    bodyElement.classList.add("LigthBackgroundDarkText");
}else if (savedTheme === "dark"){
    bodyElement.classList.add("DarkbackgroundLightText");
}





