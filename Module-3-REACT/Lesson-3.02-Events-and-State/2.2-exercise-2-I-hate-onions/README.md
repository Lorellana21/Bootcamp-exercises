# Odio la cebolla

Vamos a crear un componente `OnionHater` que consta de un `textarea`. Escucharemos los
evento de cambio del valor del `textarea` de forma que, si el texto escrito contiene la palabra 'cebolla' hagamos un `alert()` diciendo 'ODIO LA CEBOLLA'.

PISTA: para acceder al valor del `textarea` lo podemos hacer desde el objeto evento, el parámetro de la función escuchadora, con `ev.target.value`

PISTA: para comprobar si una cadena contiene un texto podemos usar el método `includes` de las cadenas.

---

# I hate onions

We are going to create an `OnionHater` component consisting of a `textarea`. We will listen for the event to change the value of the `textarea` so that, if the typed text contains the word 'onion' we'll do an `alert()` saying 'I HATE ONIONS'.

HINT: to access the value of the `textarea`, we can do it from the event object, the
parameter of the listener function, with `ev.target.value`.

HINT: to check whether a string contains text we can use the `includes` method
method of the strings.
