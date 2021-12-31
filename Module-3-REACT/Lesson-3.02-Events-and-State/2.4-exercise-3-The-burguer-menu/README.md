# El menú de hamburguesa

En este ejercicio vamos a programar el típico menú de hamburguesa que se despliega desde la izquierda de la página.

![](https://books.adalab.es/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2F5ae866b60baa7224967d2d0b68f332c32910ffb3.gif?generation=1631780513076878&alt=media)

Para ello necesitaremos:

1. Crea un nuevo ejercicio desde tu React starter kit.
2. Empieza por crear el HTML dentro de tu componente App. Debemos añadir:
- Un icono que al pulsarlo abra el menú.
- Un contenedor del menú.
- Un icono que al pulsarlo cierre el menú. Este icono lo meteremos dentro del contenedor del menú.
3. A continuación debemos crear los estilos que nos permitan que añadiendo y quitando una clase al contenedor del menú éste aparezca y desaparezca.
4. Por último tenemos que gestionar el estado del menú con React. Para ello:
- Crearemos un estado para guardar si el menú está abierto o cerrado. ¿Qué tipo de dato crees que debe ser?
- Crear una función manejadora que cada vez que se ejecute invierta el valor del estado.
- Añadir esta única función manejadora a los dos iconos.

Como ves aquí estamos trabajando con contenidos (HTML), estilos (CSS o Sass) y funcionalidad (React y JS). Mientras programamos este menú puede haber varios fallos. Para saber dónde está fallando debes inspeccionar el HTML generado con DevTools para saber si los fallos son de HTML o de estilos.

---

# The hamburger menu

In this exercise we are going to program the typical hamburger menu that is displayed from the left side of the page.
To do this we will need:

1. Create a new exercise from your React starter kit.
2. Start by creating the HTML inside your App component. We need to add:
- An icon that opens the menu when clicked.
- A menu container.
- An icon that closes the menu when clicked. We will put this icon inside the menu container.
3. Next we must create the styles that allow us to add and remove a class to the menu container so that it appears and disappears.
4. Finally we have to manage the state of the menu with React. To do this:
- We will create a state to store if the menu is open or closed. What kind of data do you think it should be?
- Create a handler function that every time it is executed it inverts the value of the state.
- Add this single handler function to the two icons.

As you can see here we are working with content (HTML), styles (CSS or Sass) and functionality (React and JS). While programming this menu there can be several bugs. To know where it is failing you should inspect the generated HTML with DevTools to know if the failures are HTML or styles.
