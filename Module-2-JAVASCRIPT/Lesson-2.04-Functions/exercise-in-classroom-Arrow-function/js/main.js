'use strict';

//global
const result = document.querySelector(".js-text");
const title = document.querySelector(".js-title");

function iva(price) {
  // local
  const ivaCal = price * 0.21;
  const total = price + ivaCal;
  //result.innerHTML += `el precio es: ${price} el iva es: ${iva} el total a pagar es ${total} `;
  const result = `el precio es: ${price} el iva es: ${ivaCal} el total a pagar es ${total} `;
  return result;
}
iva(100);
iva(1000);
iva(500);

let resultIva = iva(350);
console.log(resultIva);
console.log(iva(100));

//función arrow- flechas
const saludar = hora => {
  if (hora < 13) {
    return "buenos dias";
  } else if (hora < 20) {
    return "buenas tardes";
  }
  else {
    return "buenas noches";
  }
}

title.innerHTML = saludar(22);
console.log(saludar(12));