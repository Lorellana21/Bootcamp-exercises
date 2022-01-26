# Expreso mi odio en rojo

Partiendo del código del ejercicio 1, vamos a hacer que nuestro componente ocupe toda la pantalla disponible, y tenga el `textarea` en el centro. Vamos a hacer que al detectar la palabra cebolla en el texto del `textarea` , en vez de mostrar un alert mostrando nuestro odio, pongamos el fondo del componente de color rojo. Al volver a un texto sin cebolla, el fondo vuelve a ser blanco.

1. Guardaremos la información de si estamos odiando o no en un atributo de la clase. Para ello en el constructor pondremos `this.isHating = false`.
2. En la función que maneja el evento `change` del textarea modificaremos el atributo `isHating` y usaremos el método `this.forceUpdate()` para forzar el repintado.

   PISTA: recuerda que para que el `this` funcione correctamente en nuestra función de handle debemos hacer el `bind` adecuado en el constructor.

   BONUS: ¿Podrías hacer que nuestro odio aparezca tanto si 'cebolla' tiene mayúsculas o minúsculas?

---

# I express my hatred in red

Starting from the code of exercise 1, we are going to make our component occupy the whole available screen, and have the `textarea` in the centre. When we detect the word onion in the text of the `textarea` , instead of displaying an alert showing our hatred, we will turn the background of the component red. When we return to a text without onion, the background returns to white.

1. We will store the information of whether we are hating or not in an attribute of the class. For it in the constructor we will put `this.isHating = false`.
2. In the function that handles the `change` event of the textarea we will modify the `isHating` attribute and use the `this.forceUpdate()` method to force the repaint.

   HINT: remember that for the `this` to work correctly in our handle function we must make the appropriate `bind` in the constructor.

   BONUS: Could you make our hate appear whether 'onion' is upper or lower case? lower case?
