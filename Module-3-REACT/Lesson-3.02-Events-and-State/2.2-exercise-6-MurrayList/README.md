#

Tenemos tres componentes, `MurrayList`, `RandomMurray` y `ReloadButton`, cada uno en su módulo. `MurrayList` renderiza una lista con varios componentes `RandomMurray` , y además un botón `ReloadButton`.

Como vemos en el componente `MurrayList` llamamos a un componente `ReloadButton` al que pasamos por props una función que llamamos `actionToPerform`. Esta prop apunta al método `handleClick` que simplemente hace un `forceUpdate` que provoca una llamada al render y por tanto el re-renderizado de todas las hijas, las 3 `RandomMurray` , provocando el
pintado de 3 nuevas imágenes aleatorias.

En `ReloadButton` es donde sucede el lifting: recogemos la función que llega de la madre por props ( `actionToPerform` ) y se la asignamos al `onClick` del botón. De esta forma, al hacer click en el botón ejecutamos una función de la madre.
