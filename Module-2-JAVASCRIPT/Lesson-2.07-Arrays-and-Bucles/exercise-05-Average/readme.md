## La media

a) Vamos a crear un nuevo array `numbers` que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.

b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

c) Vamos a generalizar el código anterior creando una función `average`. Esta función toma como parámetro un array `numbers`, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad `length`. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

---

## The average

a) Let's create a new array `numbers` containing any 5 numbers. We are going to loop through the array to calculate the average of the numbers (the sum of the numbers divided by how many there are, i.e. 5). We will need a variable (accumulator) to store the sum of all the numbers and then be able to do the average. To check if the result is correct, we are going to log it in the console.

b) Now we are going to add a new number to the array and repeat the calculation of the average. In this case, to calculate the average we will have to add them all and divide by the total, which is now 6.

c) We are going to generalise the previous code by creating an `average` function. This function takes an array `numbers` as a parameter, calculates the average of the array (of any length) and returns the average. In order to work with arrays of any length, we must query the length of the array through its `length` property. To check that the function makes the correct calculation, we will invoke it (or execute it so it doesn't sound so esoteric) several times passing it as argument an array with a different length each time and we will show the result in the browser console.
