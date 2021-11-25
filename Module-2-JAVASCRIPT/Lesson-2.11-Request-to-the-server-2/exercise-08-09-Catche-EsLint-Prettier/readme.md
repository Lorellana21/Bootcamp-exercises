## Ejercicio 8 y 9

Sobre el ejercicio 2 vamos a cachear las búsquedas al servidor. De forma que cuando a busquemos una cadena a través del campo de búsqueda, primero busque en `localStorage` si ya tenemos un resultado en local para esa cadena. Si no lo hay se pide al servidor y luego se guarda en `localStorage` usando como clave el texto de la búsqueda; si al buscarlo en `localStorage` lo encontramos pues le enseñamos el resultado directamente al usuario y nos evitamos una petición al servidor.

Incluye ESLint y Prettier; corrige todos los errores detectados por el linter.

---

## Exercise 8 and 9

On exercise 2 we are going to cache the searches to the server. So that when we search for a string through the search field, it first looks in `localStorage` if we already have a local result for that string. If there isn't, it is requested to the server and then stored in `localStorage` using as key the text of the search; if we find it in `localStorage`, we show the result directly to the user and we avoid a request to the server.

Includes ESLint and Prettier; corrects all errors detected by the linter.
