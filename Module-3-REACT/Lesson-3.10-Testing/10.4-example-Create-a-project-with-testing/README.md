# Arracar un proyecto con testing

Para crear un proyecto de React o JavaScript y testearlo tenemos dos opciones:
La primera opción es crear un proyecto desde cero. Para ello:

Ejecutar el comando

```
create-react-app nombre-de-proyecto
```

Este comando nos crea un proyecto listo para empezar a trabajar, ya que contiene los ficheros src/setupTests.js y App.test.js, que son los que necesitamos para testear.

Con estos pasos ya tenemos creado nuestro primer test. Para ejecutar los tests ejecuta en la terminal: `npm test`

Si todo ha ido bien en la terminal te mostrará algo como:

[](https://774018087-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2Fc97d6e459ce89db8fac929d57ba1da2b938ee9d5.png?generation=1632931721579149&alt=media)

Y si algo ha fallado verás algo como:

[](https://774018087-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2Ff7ed31e0b045c2484a7188565e1022077e248c11.png?generation=1632931721627756&alt=media)

Por cierto en los ficheros de tests podemos poner los console.log() que queramos para saber por qué un test está fallando.
