"use strict";

const usertext = document.querySelector(".js-usertext");

const handleKey = (ev) => {
  if (usertext.value.includes("gazpacho")) {
    usertext.classList.add("red");
  } else {
    usertext.classList.remove("red");
  }
};

usertext.addEventListener("keyup", handleKey);
