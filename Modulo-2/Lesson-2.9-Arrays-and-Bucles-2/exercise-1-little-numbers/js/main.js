`use strict`;

//Crear una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. 

//Array vacio:
const arr = [];

//Función con bucle dentro
function get100Numbers () {
    for (let i = 0; i < 100; i++){
        arr.push(i + 1);
        console.log(arr[i]);
    }
}
get100Numbers();
//console.log(arr);

