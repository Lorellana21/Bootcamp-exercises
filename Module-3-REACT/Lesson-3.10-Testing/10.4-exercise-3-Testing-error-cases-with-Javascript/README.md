# Testeando los casos de error con JavaScript

Continuamos el ejercicio anterior...

¿Qué debe hacer la función `getSquareArea()` si no le pasamos ningún argumento? ¿Debería dar un katakroker?
¿Devería devolver undefined, null, false...?
¿Debería devolver 0?

Si da un katakroker mal asunto. Cuando terminemos de programar una aplicación, nunca debería haber katakrokers en la terminal.

El testing nos ayuda a replantearnos nuestro código desde otro punto de vista. Nos ayuda a pensar en todos los posibles errores que se pueden producir.

1. Edita la función `getSquareArea()` para que si uno de los parámetros que recibe es `undefined` devuelva algo.

   - Si recuerdas, cuando una función espera un parámetro y al ejecutarla no se le pasa ese parámetro, dentro de la función recibimos el parámetro como `undefined`.
   - ¿Qué debería devolver la función en este caso? un undefined, null, false, NaN o 0, lo que tú quieras, lo que consideres que es el comportamiento adecuado de esta función.

2. Añade un test más a `src/area.test.js` para que también comprobemos qué ejecutamos la función `getSquareArea()` sin argumentos, esta devuelva lo que tú hayas decidido que devuelva.

3. En este test puedes usar matchers específicos. Mira todos los que hay en [está página](https://jestjs.io/es-ES/docs/expect) y usa el que más te guste.

Y así hasta el infinito, nos debemos preguntar ¿Qué pasa si la función recibe parámetros pero no son números, son arrays, objetos, textos, booleanos...? Siempre que programemos una función debemos hacernos estas preguntas:

- ¿Quiero hacer un código tan robusto que la función `getSquareArea()` pueda recibir cualquier cosa?
- ¿Voy a ejecutar yo esa función simpre? ¿O la va a ejecuar alguien que no la ha programado y puede ejecutarla mal?
- ¿Desde donde se ejecuta la función hay posibilidad de pasar como argumentos algo que no sea un número?
- ¿La función va a ser ejecutada tras un evento de la usuaria y esta no tiene ni idea si en el campo de texto tiene que poner un número u otra cosa?
- ¿Tendría que hacer estas comprobaciones dentro de mi función o en el manejador del evento que es desde donde ejecutando mi función?
- ...
