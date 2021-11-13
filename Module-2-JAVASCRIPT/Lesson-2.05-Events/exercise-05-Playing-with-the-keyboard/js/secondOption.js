
function onkeyDown(push) {
    let key = push.key;
    if (key === "r") {
      body.classList.add("red");
      body.classList.remove("purple");
    } else if (key === "m") {
      body.classList.add("purple");
      body.classList.remove("red");
    }
  }
  
  document.addEventListener("keydown", onkeyDown);