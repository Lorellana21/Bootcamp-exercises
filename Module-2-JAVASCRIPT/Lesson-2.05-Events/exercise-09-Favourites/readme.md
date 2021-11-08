## Favoritos

Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:

- Añadir la clase `.teacher--selected` si no la tiene, o quitarla si la tiene.
- Modificar el texto del span `.favorite` sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.

Nota: con `querySelecto` buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de `document` (todo nuestro documento HTML), con `document.querySelector()`.

Si tuviéramos una constante llamada, por ejemplo, `sectionAboutElement` en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así `sectionAboutElement.querySelector()`.

---

## Favourites

We have prepared an HTML with three cards. When clicking on an item in the list we must:

- Add the `.teacher--selected` class if it doesn't have it, or remove it if it does.
- Modify the text of the `.favourite` span by replacing it with 'Remove' if it currently contains 'Add', or with 'Add' if it contains 'Remove'.

Note: with `querySelector` we search for one element inside another. So far we have used it to search within document (our whole HTML document), with
`document.querySelector()`.

If we had a constant called, for example, `sectionAboutElement` in which we've
HTML element, we could search inside it for another element, like this
`sectionAboutElement.querySelector()`.
