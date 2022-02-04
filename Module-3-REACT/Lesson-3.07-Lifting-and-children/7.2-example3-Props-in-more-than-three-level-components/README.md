# Props en componentes de más de tres niveles

En una jerarquía en la que hay 4 niveles o más, si quieres pasar props desde el primer nivel al último tendremos:

- El componente del primer nivel, el componente App: es el que envía las props hacia abajo.
- Los componentes intermedios: reciben las props de su madre y se las pasan a sus hijas. Son intermediarios.
- El componente del último nivel: es el que recibe las props y las usa, las pinta...

# Lifting en componentes de tres o más niveles

Hacer lifting es pasar una prop a un componente hija que en vez de ser un dato es una función sin ejecutar.

Cuando la usuaria pulsa en **Añadir a la cesta** se ejecuta la línea `props.addToCart(props.productId);` que viaja hacia arriba desde `Product` a `ProductList` a `App`, y acaba consoleando el `productId` del producto pulsado.
