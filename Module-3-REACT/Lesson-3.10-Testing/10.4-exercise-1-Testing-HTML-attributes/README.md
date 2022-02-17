# Testeando los atributos HTML

Hemos programado una aplicación con estos dos componentes.

Y queremos testear si el atributo `target` es correcto en los dos links. Empezamos creando un test para testear el componente cuando **recibe la prop `openInNewTab` a `true`**. Para ello:

1. Arranca los tests con npm test.
2. Crea el fichero `src/tests/MenuItem.tests.js` y en él:

   - Importa las funciones necesarias con `import { render, screen } from '@testing-library/react';`.

   - Importa el componente `MenuItem`.

   - Crea la función `test` con una buena descripción que indique que queremos comprobar que el valor de `target` es `\_blank` cuando el componente recibe la prop `openInNewTab` a `true`.

   - En la parte de preparación o arrange usa la función `render` para renderizar el código `<MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />`.

   - En la parte de actuación o act busca la etiqueta que tenga el texto "Blog". - Aquí te recomendamos consolear el retorno para saber qué estás haciendo, si todo ha ido bien verás en consola la info relativa al link que ha sido renderizado `<a href="...">...</a>`.

   - En la parte de aserción o assert debes: 1. Obtener el valor del atributo `target` del link. Consolea este valor y si todo ha ido bien debería ser `\_blank`. 2. Utiliza el matcher [.toBe()]("https://jestjs.io/es-ES/docs/expect#tobevalue") para comprobar que el valor del `target` es `\_blank`.

   - Para saber que lo has hecho todo bien el test debería estar en verde.

A continuación queremos probar que el componente `MenuLink` renderiza un link con `target=""` cuando no recibe la prop `openInNewTab`. Vamos a seguir trabajando en el fichero `src/tests/MenuItem.tests.js`:

1. Crea otra función `test` debajo de la anterior con una buena descripción.

2. En la parte de preparación renderiza el componente `<MenuItem text="Contacto" href="https://adalab.es/contacto" />`.

3. En la parte de actuación busca la etiqueta HTML que tenga el texto "Contacto".

4. En la parte de aserción obtén el valor del atributo `target` y comprueba con un `expect` y el matcher .toBe() que es un string vacío. También puedes utilizar el matcher .[toBeFalsy()](https://jestjs.io/es-ES/docs/expect#tobefalsy).


