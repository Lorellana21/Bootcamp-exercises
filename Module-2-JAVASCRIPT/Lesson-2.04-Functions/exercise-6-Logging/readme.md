## Logueando errores

Nos hemos dado cuenta de que cuando llamamos a getEl a veces nos equivocamos escribiendo el selector (se nos olvida el punto de la clase, nos comemos una letra...), a partir de ahí todo falla y nos cuesta encontrar dónde está el error.
Vamos a mejorar nuestra función para que nos avise cuando esto ocurre. Dentro de ella:

- Al recoger el elemento de HTML vamos a guardarlo en una constante.
- Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso
  vamos a imprimir un error en la consola que diga:

```
No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-delselector}
```

- Finalmente tras nuestro condicional retornaremos la constante con el elemento.

Nota: podemos imprimir/loguear errores con `console.error()` .

---

## Logging errors

We have noticed that when we call getEl we sometimes make a mistake in writing the selector (we forget the point of the class, we miss a letter...), then everything fails and it is difficult to find where the error is.
We are going to improve our function so that it warns us when this happens. Inside it:

- When picking up the HTML element we are going to store it in a constant.
- With a conditional we're going to check if the constant has no value, and if it does, we're going to print an error to the console saying:

```
There is no element with class, id or tag called {here-seelector-name}.
```

- Finally, after our conditional we will return the constant with the element.

Note: we can print/log errors with `console.error()` .
