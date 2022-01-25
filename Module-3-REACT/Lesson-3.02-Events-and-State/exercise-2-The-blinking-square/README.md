# El cuadrado parpadeante

Vamos a crear una página con un cuadrado de tamaño fijo (por ejemplo un `div`) con un color de fondo azul. Vamos a hacer que al hacer clic sobre el cuadrado, su color de fondo cambie a rojo. Si volvemos a hacer clic, pasa de nuevo a azul, y así sucesivamente. Implementaremos este cuadrado parpadeante usando el estado del componente (podemos almacenar el color como un string o un booleano)

PISTA: Al escuchar el evento de clic para comprobar de qué color estaba anteriormente el cuadrado, usaremos la versión anterior del estado que toma el parámetro el `prevState` de la función callback que le pasamos a `setState`

---

# The blinking square

Let's create a page with a fixed size square (e.g. a `div`) with a blue background colour. When the square is clicked on, its background colour will change to red. If we click on it again, it changes back to blue, and so on. We will implement this blinking square using the component's state (we can store the colour as a string or a boolean).

HINT: When listening for the click event to check what colour the square was previously, we'll use the previous version of the state that takes the `prevState` parameter of the callback function that we pass to `setState`.
