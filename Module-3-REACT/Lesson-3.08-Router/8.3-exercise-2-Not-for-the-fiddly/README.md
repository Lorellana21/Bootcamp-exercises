# No apto para manazas

Hasta ahora hemos trabajado con las rutas siempre en el fichero App. Esto es así porque normalmente cuando navegamos de una ruta a otra de una página lo que cambia es el contenido principal.
Ahora lo que queremos es gestionar contenido a través del router pero no en `App` sino en otro componente, por ejemplo en `Header`.
El objetivo es que cuando los usuarios entren en la página **Settings** aparezca un mensaje (dentro de la cabecera) que ponga **Zona no apta para manazas**.

![](https://774018087-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2F121c2e1b347e1525637a17633fe324a9d9410524.png?generation=1632825096634594&alt=media)

Para ello:

1. Partiendo del ejercicio anterior crea el componente `Header`.
   - Mueve el menú dentro de este nuevo componente.
   - Importa y usa `Header` en `App` para que la página se muestre igual que antes.
2. Añade un `<div />` al `Header` con el mensaje **No apto para manazas**.
3. Con React Router DOM haz que este mensaje solo aparezca cuando estemos en las **Settings**.
