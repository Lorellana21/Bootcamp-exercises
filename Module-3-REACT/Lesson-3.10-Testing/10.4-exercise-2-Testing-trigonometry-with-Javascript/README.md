# # Testeando trigonomería con JavaScript

Ahora vamos a testear código JS puro y duro. Sobre el ejercicio anterior:

1. Crea el fichero en src/services/area.js:

   - Este fichero debe tener una función llamada `getSquareArea()` que recibe un número que indica el lado del cuadrado y retorna el área del mismo.
   - Este fichero debe tener otra función llamada `getSquareTriangle()` que recibe un número con la base y otro con la altura del triángulo y retorna el área del mismo.
   - Este fichero debe exportar un objeto con las dos funciones dentro.

2. Crea el fichero en `src/tests/area.test.js`:
   - En este fichero debes importar el fichero a testear con `import area from '../services/area';`.
   - Crea un test que compruebe que si le pasamos a la función `getSquareArea()` un 3 esta nos devuelve un 9.
   - Crea otro test que compruebe que si le pasamos a la función `getSquareTriangle()` un 3 y un 4 esta nos devuelve un 6.

Por cierto, como aquí estamos testeando un fichero de JavaScript y no un componente de React, no es necesario importar `import { render, screen } from '@testing-library/react';
