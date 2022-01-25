## Fruta fresca

Vamos a hacer una lista de frutas populares, que nos permita añadir y quitar elementos.

```
this.state = {
2 popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
3 newFruit: ''
4 };
```

1. Pintar el listado a partir de la clave del estado `popularFruits` .
2. Pintar un input de texto y un botón con el texto 'Añadir'
3. Cada vez que el input cambie, hay que actualizar la clave del estado `newFruit`
4. Cuando se pulse el botón 'Añadir' hay que:
   - actualizar la clave del estado `popularFruits` con el valor de `newFruit` . Ojo, no vale mutar el array contenido en `popularFruits` con un push. Usaremos `spread` o el método de array `.concat` para generar un nuevo array.
   - actualizar el valor de `newFruit` con comitas vacías para limpiar el input.
5. Ahora vamos a añadir un botón 'Eliminar' junto a cada fruta, a este botón tenemos que añadirle un atributo `value` o `data-fruit` con el nombre de la fruta junto a la que se encuentra como valor.
6. Cuando se pulse el botón tenemos que recoger la fruta que queremos eliminar y actualizar la clave del estado `popularFruits` con un nuevo array que no contenga dicha fruta. El método `.filter` de array que devuelve una copia nueva puede ayudaros con esta tarea.
