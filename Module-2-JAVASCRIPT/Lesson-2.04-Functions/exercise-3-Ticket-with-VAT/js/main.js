'use strict';

const result = document.querySelector (".js-result");

function getIva(price){
    const IVA = price * 0.21;
    const total = price + IVA;
    result.innerHTML = `Precio sin IVA: ${price}, IVA: ${IVA} y total: ${total}`;
  }
  
//No tiene return porque ya me pinta el resultado con el innerHTML.
  const resultIva = getIva(10);
  
//Other way of doing it:
  function iva(a) {
    const ivaResult = a * 0.21;
    const totalPrice = a + ivaResult;
    console.log(
      "Precio sin IVA: " +
        a +
        "€, IVA: " +
        ivaResult +
        "€ y Total: " +
        totalPrice +
        "€."
    );
  }
  
  let price = iva(10);