## The numbers

```
const lostNumbers = [4, 8, 15, 16, 23, 42];
```

Vamos a crear una función `bestLostNomber` que nos devuelve algunos números del array [de los números de la serie Lost](https://lostpedia.fandom.com/wiki/The_Numbers) que tenemos arriba. La función debe seguir estos pasos:

1. Crear un nuevo array que contiene solo los números pares que hay en `lostNumbers`. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array `lostNumbers` para al encontrar un número par, meterlo en el nuevo array.
1. Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en `lostNumbers`, de una forma similar al anterior.
1. Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.

Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

---

## The numbers

```
const lostNumbers = [4, 8, 15, 16, 23, 42];
```

Let's create a function `bestLostNomber` that returns some numbers from the array of [numbers in the Lost series](https://lostpedia.fandom.com/wiki/The_Numbers) above. The function must follow these steps:

1. Create a new array containing only the even numbers in `lostNumbers`. To achieve this, we are going to create a new empty array and go through the `lostNumbers` array to find an even number and put it in the new array.
1. Create a new array that contains only the numbers multiples of 3 that are in `lostNumbers`, in a similar way to the previous one.
1. Return a concatenation of the 2 previous arrays, that is to say, that will have first the even numbers and then the multiples of 3.

To check that we have them all, let's run the function and log them (with console.log) one by one in the console in order.
