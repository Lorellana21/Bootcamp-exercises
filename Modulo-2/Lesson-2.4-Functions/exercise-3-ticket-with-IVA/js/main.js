'use strict';

//Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".

//Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.

const result = document.querySelector (".js-result");

function getIva(price){
  const IVA = price * 0.21;
  const total = price + IVA;
  result.innerHTML = `Precio sin IVA: ${price}, IVA: ${IVA} y total: ${total}`;
}

//No tiene return porque ya me pinta el resultado con el innerHTML.

const resultIva = getIva(10);








