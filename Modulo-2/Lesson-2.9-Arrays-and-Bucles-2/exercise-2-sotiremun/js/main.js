`use strict`;

//Crea una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden.

//Ejercicio anterior:
const arr = [];

function get100Numbers () {
    for (let i = 0; i < 100; i++){
        arr.push(i + 1);
        //console.log(arr[i]);
    }
}

//Ejercicio actual:
function getReversed100Numbers(){
    get100Numbers();
    }

//Para comprobar que los tenemos todos, ejecuta la función y loguealos uno a uno

getReversed100Numbers();
console.log(arr.reverse());


