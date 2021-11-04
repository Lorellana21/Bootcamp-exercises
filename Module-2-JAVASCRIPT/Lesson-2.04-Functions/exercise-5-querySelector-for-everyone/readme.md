## querySelector para todas

Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir `document.querySelector(...)` tantas veces una compañera ha sugerido hacer una función llamada `getEl` .
Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. 
Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:
```
const btnEl = getEl('.btn');
```
Nota: Prepara un HTML con varios elementos para poder probarla.


---

## querySelector for all

We are working on a quite big project, where we have to collect a lot of HTML elements from HTML elements from JavaScript to interact with them. In order not to have to write `document.querySelector(...)` so many times a colleague has suggested to make a function function called `getEl` .
This function must receive a css selector as a parameter and will return the corresponding HTML element. When we call the function the syntax will be as follows
like this:
```
const btnEl = getEl('.btn');
```
Note: Prepare an HTML with several elements in order to test it.
