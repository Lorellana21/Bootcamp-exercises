## Scroll es de colores

Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:

- Añadir un `div` con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo `p\*50>lorem`.
- Preparar classes para cambiar el color de fondo del `div` .
- Escuchar el evento scroll sobre la ventana `window`.
- Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.

Nota: `window.scrollY` nos devuelve la posición del scroll vertical.

---

## Scroll is coloured

Change the background colour of the page when scrolling.

-- Add a `div` with enough text inside it to scroll. You can use the following emmet command: `p*50>lorem`.

- Prepare classes to change the background colour of the `div`.
- Listen for the scroll event on the window `window`.
- When the vertical scroll position exceeds 250 pixels set a background colour, when it is less than 250 pixels set another one.

Note: `window.scrollY` returns the position of the vertical scroll.
