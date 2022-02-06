# Props children

Cuando al usar un componente de React, entre su etiqueta de apertura y de cierre metemos etiquetas HTML, React mete ese contenido en la prop especial children del componente.

Estos dos componentes generan el HTML:

```
<div>
  <h1>Jugando con ventanas modales</h1>
  <section class="modal-window">
    <p>Esto es una ventana modal</p>
    <h1>Contenido de una ventana modal</h1><!-- React ha sustituido {props.children} por este h1 -->
  </section>
</div>
```
