# Props en componentes de tres niveles

Hemos metido un componente llamado ProductList entre App y Product.

![](https://774018087-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2Ffce27bc1356c8e8abe4478fa195cb6e9c97780da.png?generation=1631780515382817&alt=media)

Lo importante de este ejemplo es que el componente que está en el medio, es decir `ProductList` lo único que hace es transmitir props desde su componente madre a su componente hija. Es decir, en una cadena de tres eslabones, el eslabón del medio es un simple puente, un intermediario entre los eslabones de los extremos.
Con el código de ProductList:

```
<Product
  imgSrc={props.imgSrc}
  name={props.name}
  description={props.description}
/>
```

Vemos que desde `<App />` recibimos `props.imgSrc`. Aquí se la pasamos a `<Product />` con `imgSrc={props.imgSrc}`. Y lo mismo para las props `name` y `description`.

El componente `<ProductList />` es un mensajero de información, no sabe si `imgSrc`, `name` y `description` son string, number, funciones...

Cuando programes varios niveles de componentes tu preocupación debe ser:

- Pensar en cada momento qué componente estás programando.
- Pensar qué debe recibir cada componente por props.
- Pensar qué debe pasar a sus hijos cada componente a través de las props.
- Usar la extensión de Chrome React DevTools > Componentes para saber si lo estás haciendo bien.
