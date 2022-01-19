Como ves en este servicio hemos creado 4 funciones y las **hemos exportado todas para que puedan ser usadas desde otros ficheros**. De las 4 funciones, es posible que solo necesites usar la `get` y la `set`. Si `remove` y `clear` no las usas no pasa nada.

En módulos anteriores habíamos aprendido a usar el `localStorage.getItem` y el `localStorage.setItem`. Las funciones `localStorage.removeItem` y `localStorage.clear` a lo mejor no las conocías. En resumen, **todo lo que sabías del local storage lo vamos a seguir usando igual en React**, ya que React no se preocupa de esto.

Lo importante de estos códigos es:

- Hemos creado un servicio para el local storage y así no meter tanto código en App.js.
- Lo que sabíamos del local storage es lo mismo que ya sabíamos, no hemos aprendido nada nuevo.
- Debemos leer los datos del local storage y pasárselos a la función `useState` para que el estado tenga estos valores al arrancar la página.
- Debemos guardar los datos en el local storage en un `useEffect` para que después de cambiar el local storage esté actualizado.
