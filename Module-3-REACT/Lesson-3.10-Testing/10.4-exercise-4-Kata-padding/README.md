# Kata padding

A los ejercicios de programación que se usan para practicar testing muchas veces se les llama katas. Esta kata consiste en crear una función `paddingLeft` que se encarga de meter caracteres de relleno en un cadena por el lado izquierdo hasta llegar a un tamaño deseado. Recibe 3 parámetros:

- La cadena inicial.
- Un tamaño final.
- Un valor del padding, por defecto es un espacio.

Si el tamaño final es menor o igual que la cadena inicial, se devuelve sin tocar la inicial.

Ejemplos:

- `paddingLeft('hola', 6, 'x')` devuelve `'xxhola'`
- `paddingLeft('hola', 6, 'a')` devuelve `'aahola'`
- `paddingLeft('ee', 4, 'aa')` devuelve `'aaee'`
- `paddingLeft('xxxx', 6, 'x')` devuelve `'xxxxxx'`
- `paddingLeft('', 6, 'x')` devuelve `'xxxxxx'`
- `paddingLeft('hola mi amigo', 6, 'x')` devuelve `'hola mi amigo'`
- `paddingLeft('xxxx', 0, 'x')` devuelve `'xxxx'`

En primer lugar, desarrolla el código de la función `paddingLeft` en el fichero `src/services/utils.js`. Cuando lo tengas, crea un fichero de tests y crea un test para cada uno de los ejemplos anteriores. Así estamos comprobando que la función hace lo que se ha pedido que haga.
