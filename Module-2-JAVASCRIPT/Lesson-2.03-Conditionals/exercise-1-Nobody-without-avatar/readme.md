## Nadie sin avatar

Partiendo de estas bases de html y js, vamos a realizar un programa para completar el perfil de un usuario.

```
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<title>Mi primer código JavaScript</title>
</head>
<body>
<div class="user">
<h1 class="user__name">Bill</h1>
<img class="user__avatar" />
</div>
<script type="text/javascript" src="main.js"></script>
</body>
</html>
```

```
'use strict';

 // avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
 // avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
```

Paso a paso:

1. Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML ` img` .
1. Ahora vamos a plantear que `userAvatar` pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto molona y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías `let userAvatar = '';` . ¡Ahora no debería verse ninguna imagen en la página!
1. Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
   - si tenemos el avatar del usuario se muestre este.
   - si no tenemos datos del avatar del usuario, se muestre el avatar por defecto

NOTA: En este ejercicio aún no vamos a usar condicionales `if` / `else` , tenemos que apoyarnos en el operador OR para asignar al atributo `src` de la etiqueta `img` un valor u otro.

NOTA: Cambia manualmente el valor de `userAvatar` ('http://www.fillmurray.com/300/300' o '') para comprobar que el programa funcionará para los usuarios que añadieron su foto y para los que no lo hicieron.

---

## Nobody without avatar

Starting from these html and js bases, we are going to make a programme to complete the profile of a user.
Step by step:

1. Let's make the logic to add, from javascript, the image `userAvatar` to the tag of HTML `img` tag.
1. Now let's consider that `userAvatar` may not contain a URL because, for example, when the user registered he couldn't find any cool picture and decided to upload it at a later time. To do this we need to change the contents of userAvatar to quotes empty `let userAvatar = '';` Now you shouldn't see any images on the page!
1. Let's improve our program so that the user's tab has an image, so that:

- if we have the user's avatar, it will be displayed.
- if we don't have the user's avatar, the default avatar will be shown.

NOTE: In this exercise we are not going to use `if` / `else` conditionals yet, we have to use the OR operator to assign to the `src` attribute of the `img` tag one value or another.

NOTE: Manually change the value of `userAvatar` ('http://www.fillmurray.com/300/300' or '') to check that the program will work for users who added their photo and for users who did not.
