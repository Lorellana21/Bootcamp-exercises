'use strict';

// const result = document.querySelector (".js-result");

// const price = 100;
// const iva = price * 0.21;
// const total = price + iva;

// Pintarlo en html:
// result.innerHTML = `El precio es ${price}, el IVa es ${iva}, el total apagar es ${total}`;
//Esto queda simplificado con una función como la siguiente:


function getIva(price){ //Al ser el precio el dato variable tengo que pasarlo como parámettro.
    const IVA = price * 0.21;
    const total = price + IVA;
    result.innerHTML = `Precio sin IVA: ${price}, IVA: ${IVA} y total: ${total}`;
    //No necesito un"return" porque dentro del cuerpo de la función estoy pintando el resultado con innerhtml
  }
  const resultIva = getIva(100);
  //Al no tener "return" en la consola me saldrá "undefined"
  //Asi que si quiero usar la variable "resultIva" en el futuro, va a tener "undefined".
  //En cambio, si necesito ese resultado para luego usarlo en otra parte, entonces SÍ que tengo que poner un "return"
  //Para obtener un "return" y poder usar el dato en el futuro hay que hacerlo asi:

   function getIva(price){ 
     const IVA = price * 0.21;
     const total = price + IVA;
  //   result.innerHTML = `Precio sin IVA: ${price}, IVA: ${IVA} y total: ${total}`;
     const result = `Precio sin IVA: ${price}, IVA: ${IVA} y total: ${total}`;
     return result;
   }
   const resultIva = getIva(100);
   //console.log(resultIva);//Aqui si se muestra en consola.

  
  
