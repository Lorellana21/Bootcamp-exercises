En el siguiente ejercicio en el que pedimos datos del API de Star Wars y pintamos los datos de la Princesa Leia.

Para usar `useEffect` tenemos que:

1. **Importarlo**:

- Aquí lo importamos con `import { useEffect, useState } from 'react';` porque también queremos usar `useState`.
- Si no necesitásemos importar `useState` escribiríamos `import { useEffect } from 'react';`

2. **Usarlo**:

- Aquí lo usamos con `useEffect(...)`.
- Al igual que el `useState` siempre en la raíz de la función App, nunca dentro de un `if`, un `for`, una función dentro de `App`...

`useEffect` recibe dos parámetros, una función sin ejecutar y un array. Vamos a explicarlos:

**Primer parámetro de useEffect: la función**
El primer parámetro que recibe `useEffect` es una **función sin ejecutar**. Este parámetro es **obligatorio**.

```
useEffect(
  // Aquí empieza la función
  () => {
  fetch('https://swapi.dev/api/people/5')
    .then(response => response.json())
    .then(responseData => {
      setStarWarsData(responseData);
    });
  }
  // Aquí termina la función
);
```

Esta función puede ser lo que queramos. Generalmente va a ser una llamada a un `fetch` o una escritura en el local storage.
**Es una función sin ejecutar, React la ejecutará** cuando haya renderizado y pintado el componente en la página.

**Segundo parámetro: el array**
Este segundo parámetro es **opcional**, y sirve para indicarle a React **cuándo queremos que se ejecute** el `useEffect`, es decir cuándo queremos que se ejecute la función que pasamos como primer parámetro, es decir, de qué depende que se ejecute la función.
Hay tres opciones:

- **No poner el array: la función se ejecutará siempre** que se ejecute el componente `App`, es decir, siempre que se renderice.
- **Poner un array vacío: solo se ejecutará la primera vez** que se renderice el componente, es decir, la primera vez que se ejecute el componente `App`.
- **Poner un array relleno**: si ponemos una constante de estado, **React solo ejecutará la función cuando cambie esta constante de estado**. Esta opción la veremos mejor en la mini lección siguiente con un ejemplo.
