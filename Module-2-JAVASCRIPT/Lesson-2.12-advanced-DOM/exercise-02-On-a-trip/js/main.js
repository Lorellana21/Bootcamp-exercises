'use strict';


const form = document.querySelector('.form');
const img = document.createElement('img');
const imgDiv = document.querySelector('.imgDiv');


function showImg(e){
    
    const selectedCity = e.target.value;
    console.log(selectedCity);
    
    if(selectedCity === '1'){
        img.src = './images/madrid.jpg';
    
    }else if(selectedCity === '2'){
        img.src = './images/paris.jpg';
    
    }else{
        img.src = './images/new york.jpg';
    }

    imgDiv.appendChild(img);
}


form.addEventListener('change',showImg);