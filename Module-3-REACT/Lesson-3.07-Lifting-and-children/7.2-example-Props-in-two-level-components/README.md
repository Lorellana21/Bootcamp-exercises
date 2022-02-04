# Props en componentes de dos niveles

Hemos creado una tienda de camisetas:

![](https://774018087-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2F6127540f4858965a939b04e01b8c662ada73bc04.png?generation=1631780515266501&alt=media)

`App` importa y usa `Product` y le pasa props. `Product` recibe estos datos por props y los pinta.
La conclusión es que al haber dos niveles **el nivel superior es el que pasa los datos y el nivel inferior es el que los recibe**. Lo podríamos ver como una cadena de dos eslabones.
