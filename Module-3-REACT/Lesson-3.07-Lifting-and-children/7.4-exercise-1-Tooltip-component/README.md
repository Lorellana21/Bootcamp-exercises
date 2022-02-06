# Crear un componente Tooltip

En este ejercicio queremos crear un componente Tooltip como el de la siguiente imagen. Un Tooltip son esas ventanitas que muestran ayuda cuando te posas sobre un elemento.

![](https://774018087-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2F6bc7b147f4cebcd23d0e0e53d2711d8c77a9b7a0.gif?generation=1632393656386764&alt=media)

Queremos crear un componente `Tooltip` al que le pases el código HTML con la info de la ayuda desde el componente superior `App`. Es decir, el componente `App` contiene los textos de la ayuda y para que sea reutilizable el componente `Tooltip` tiene todo lo demás:

- El icono de la interrogación.
- El contenedor HTML que recubre la ayuda.
- La lógica que hace que el contenedor se muestre y oculte cuando el ratón se posa sobre la interrogación.

La forma más fácil de crear este componente es usando `props.children`. Para crearlo te damos el código del componente `App` y tú debes crear el código del componente `Tooltip`

Pistas:

1. La complejidad de este ejercicio está en encontrar la solución. Para encontrarla tienes que pensar en el HTML y Sass que tienes que crear, es decir, cuáles son las etiqueta HTML que debes poner en el componente `Tooltip`.
1. Solo con HTML y Sass (usando el pseudoselector `:hover`) se puede conseguir, no necesitas nada más.
1. El icono con la interrogación no está en el componente `App`, por ello deberá estar en `Tooltip`.
1. La info que aparece dentro de los Tooltips sí está en `App` pero el que decide cuando se muestra es el componente `Tooltip`.

Te recomendamos seguir los siguientes pasos:

1. Crea el HTML y Sass del `Tooltip` para que cuando el ratón se pose sobre la interrogación se muestre la ayuda.
1. Después piensa tranquilamente en las propiedades CSS que conoces, como `position`, `transform`... y elije la que más te guste para maquetar y conseguir que la ayuda aparezca al lado del icono.
1. Cuando termines revisa que los estilos que corresponden al `Tooltip` estén en el fichero `./src/styles/Tooltip.scss` y el resto en `./src/styles/App.scss`.
