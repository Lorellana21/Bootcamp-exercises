`use strict`;

/*La hemos fastidiado. Otra vez. Y el profe nos ha castigado, ¡y encima sin tener la razón! Nos ha pedido que escribamos 100 veces en la pizarra una frase. ¿Podremos hacer un poco de trampa para que nos ayude JavaScript? Vamos a crear todos los elementos HTML como hemos aprendido en esta sesión, es decir, sin innerHTML ;)
1. Repítelo 100 veces
¡Es hora de actuar! En la pizarra (nuestra página web) tenemos que escribir 100 veces la frase "He aprendido bien cómo funcionan los bucles". Cada frase en una línea diferente. ¿Podremos conseguirlo? Primero dale a la web aspecto de pizarra: el fondo de negro, las letras en blanco, tipografía que simula el pintado con tiza tipo chalkboard, etc. Y luego, ¡a escribir!
2. Un combo por frase
¡Seguimos con nuestra pizarra! Ahora vamos a añadir un combo (elemento select de HTML) al final de cada línea de texto. En el combo podremos seleccionar un color de los siguientes: blanco, azul, rojo, verde, amarillo, rosa. Por defecto, el combo tendrá seleccionado el color blanco que es el color del texto de los párrafos.
3. Vamos a darle color
Ahora viene lo bueno: vamos a añadir el comportamiento a la web para que al modificar un combo se cambie el color del texto de esa línea al color indicado en el combo. Por ejemplo, si modificamos el color del combo de la línea 3 a rosa, el texto de la línea 3 se convierte en rosa.
Algunas pistas para esta tercera parte:
primero haced funcionar un combo para una única línea
investigad cómo funciona el evento change de los elementos tipo select (documetación de MDN)
desde el objeto event de la función de callback, podemos acceder al select que ha provocado el evento mediante event.currentTarget; incluso al índice (como en un array) de la opción seleccionada con event.currentTarget.selectedIndex

*/
