'use strict';

//Recojo el valor del input:
const input = document.querySelector(".js-hour");//Guardo la estructura comnpleta
//Para coger el valor debo usar la función propia de Javascript: el "value"
const inputValue = parseInt(input.value);//del input dame su valor y lo convierto a número

//Recojo donde voy a pintar el resultado:
const result = document.querySelector(".js-result");
const nameper = "pepito";
const nameper2 = "josefina"

//Por defecto el "if" siempre evalua que lo que hay entre sus parentesis sea verdadero

//Si solo tengo un camno a evaluar usaré un "if simple":
if (inputValue > 9) { //Esta sentencia nos devuelve un valor booleano
    result.innerHTML = "estas llegando tarde";
}


//2 caminos a evaluar
/* if compuesto   IF-ELSE*/
if ((nameper2 === "josefina" || nameper === "pepito") && inputValue > 9) {
    result.innerHTML = " estas despedida ";
}//si no se cumple la condicion anterior se va al "else"
else {
    result.innerHTML = "estas llegando tarde";
}
