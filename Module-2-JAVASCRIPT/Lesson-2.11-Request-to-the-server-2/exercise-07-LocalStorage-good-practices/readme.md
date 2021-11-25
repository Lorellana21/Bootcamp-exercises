## Buenas prácticas trabajando con LS

Partiendo del ejercicio anterior vamos a visitar la página y borraremos el valor del `localStorage` a través de las DevTools. Con el `localStorage` limpito, recargaremos la página para simular la primera visita de la usuaria, dónde aun no habría información sobre el nombre guardada (`cacheada`).

Si al realizar esta acción nos encontramos algún error tenemos que apañarlo.

A partir de ahora **recuerda** que siempre que recojas un dato del localStorage, deberías comprobar que existe antes de empezar a trabajar con el, y **realizar una limpieza del localStorage** manual para comprobar que todo funciona como esperas, haya o no datos cacheados.

---

## Good practices working with LS

Starting from the previous exercise, we will visit the page and clear the `localStorage` value through the DevTools. With the `localStorage` cleared, we will reload the page to simulate the first visit of the user, where there would still be no information about the name stored (`cached`).

If we find any error when doing this action, we have to fix it.

From now on, **remember** that whenever you collect data from the localStorage, you should check that it exists before you start working with it, and **perform a manual localStorage cleanup** to check that everything works as expected, whether or not there is cached data.
