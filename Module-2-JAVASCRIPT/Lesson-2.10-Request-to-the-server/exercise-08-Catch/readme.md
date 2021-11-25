## Cazando errores 1

Partiendo del ejercicio 1 vamos a modificarlo para en lugar de parsear la respuesta a `JSON` (`response.json()`) lo hagamos a `html` (`response.html()`). Ahora si abrimos la consola del navegador nos encontraremos un mensaje de error, léelo para familiarizarte con él.
Este error nos indica que ha sucedido un error en una de las promesas y que no lo hemos cazado, también nos da algo de información sobre el error. En este caso hemos intentado parsear a `html` la respuesta de la api de `rand.fun` que solo es parseable a `JSON`.
Vamos a ponerle un `catch` a nuestra promesa y a `loguear` el error.

---

## Bug hunting 1

Starting from exercise 1 we are going to modify it so that instead of parsing the response to `JSON` (`response.json()`) we parse it to `html` (`response.html()`). Now if we open the browser console we will find an error message, read it to familiarise yourself with it.
This error tells us that an error has occurred in one of the promises and that we have not caught it, it also gives us some information about the error. In this case we have tried to parse to `html` the response from the `rand.fun` api which is only parseable to `JSON`.
Let's put a `catch` on our promise and `log` the error.
