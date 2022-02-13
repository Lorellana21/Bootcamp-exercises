# Numeritos

Vamos a crear una aplicación de React que, dado un listado de números como el del ejemplo
anterior ( `const numbers = [1, 4, 6, 8, 45, 89];` ), los pinta en pantalla (usaremos un `ul` y sus `li` ¡por supuesto!). Para pintarlos vamos a usar la función `.map` para pasar de un listado de números a un listado de elementos de JSX.

a) Vamos a añadir un formulario a la página, que contiene un input donde podemos introducir un
número. Si ponemos un 6, se mostrarán en pantalla solo los números mayores de 6. Usaremos `filter` y el patrón chaining para conseguirlo.

b) Vamos a añadir un nuevo campo al formulario de tipo checkbox, que al marcarlo filtre además los números pares, desapareciendo de pantalla los impares. Este filtro debe actuar además del anterior, es decir, podremos filtrar los números mayores de 6 y que además sean pares.
