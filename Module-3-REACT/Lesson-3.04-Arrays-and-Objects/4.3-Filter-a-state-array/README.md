# ¿Dónde debemos filtrar un array del estado?

En este ejercicio mostramos un listado de series con la funcionalidad:

- Al pulsar una serie se des / marca como favorita.
- Hay un input de texto para filtrar por el nombre de la serie.
- Hay un filtro de checkbox para mostrar solo las favoritas.

Como ves, los dos `filter` los hacemos en la función `renderSeries`, es decir, **en el momento de pintar o renderizar las series**.

En otras lecciones hemos comentado que **en el estado de React debemos guardar los datos que cambian**, en este caso el array de series, y también **los datos originales que la usuaria introduce desde un formulario**.

Este código va a ser igual en todas las aplicaciones de React en las que tengas que filtrar. Lo único que cambiará será el código que haya dentro de los filter ya que esto depende de la funcionalidad propia de tu aplicación.

---
