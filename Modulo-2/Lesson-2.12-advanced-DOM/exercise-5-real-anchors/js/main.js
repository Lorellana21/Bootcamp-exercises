`use strict`;

/*Vamos a partir del ejercicio 11 de la sesión 2.5, donde aprendimos a eliminar el comportamiento por defecto del enlace. En este ejercicio vamos a terminar lo que empezamos, y podremos hacer scroll hasta cada sección usando enlaces desde JS.
Para ello seguimos estos pasos:
1. Ponemos un atributo data-id a los enlaces para indicar a qué elemento debemos hacer scroll.
2. Al hacer click, eliminamos el comportamiento por defecto.
3. Con getBoundingClientRect buscamos la posición del elemento en la página.
4. Usando window.scrollTo hacemos scroll hasta el elemento pero restando alguno píxeles para que la cabecera fija no lo tape.

*/
