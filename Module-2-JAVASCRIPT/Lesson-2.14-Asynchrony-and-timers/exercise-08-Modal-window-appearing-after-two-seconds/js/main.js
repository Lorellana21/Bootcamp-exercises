"use strict";

const modal = document.querySelector(".js-modal");
const closeBtn = document.querySelector(".js-close-btn");

setTimeout(()=>{modal.classList.remove("hidden");},2000);

closeBtn.addEventListener("click",()=>{
    modal.classList.add("hidden");
});

