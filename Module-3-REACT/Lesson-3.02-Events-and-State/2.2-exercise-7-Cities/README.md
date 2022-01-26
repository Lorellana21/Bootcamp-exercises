# Ciudades

Partimos de un select con nombre de ciudades que encapsulamos en un componente
`CitySelector`. Vamos a hacer que, al seleccionar una ciudad del select, aparezca una foto de la misma al lado. La diferencia con ejercicios anteriores es que ahora el select está en su propio componente. Para llevarlo a cabo debemos:

- guardar en un atributo de la clase la ciudad seleccionada como inicial, por ejemplo, `this.selectedCity = 'Madrid'` y usarlo para pintar la imagen en el render
- crear un método `handleClick` que actualice el valor de `selectedCity` y llame a `forceUpdate` para forzar el repintado de la imagen
- y usar lifting para pasarlo al componente hijo que se ejecute al cambiar el select

---

# Cities

We start from a select with the name of cities that we encapsulate in a component ``CitySelector` component. We are going to make that, when selecting a city from the select, a picture of it appears next to it. The difference with previous exercises is that now the select is in its own component. To do this we must:

- save in an attribute of the class the selected city as initial, for example, `this.selectedCity = 'Madrid'` and use it to paint the image in the render.
- create a `handleClick` method that updates the value of `selectedCity` and calls `forceUpdate` to force the image to be repainted
- and use lifting to pass it to the child component to run when the select is changed
