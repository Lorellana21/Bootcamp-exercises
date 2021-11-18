# Git colaborativo

Vamos a hacer unas Pull Request con revisión de código, ¿o qué?
Partimos de una base:

index.html:

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="main.css">
        <title>Face time!</title>
    </head>
    <body>
        <div class="page">
            <div class="head">
                <div class="face">:|</div>
            </div>
        </div>
    </body>
</html>
```

main.css:

```
.head {
  background: #fc0;
  height: 100px;
  position: relative;
  width: 100px;
}
.face {
  font-family: 'courier new', serif;
  font-size: 2.5em;
  font-weight: bold;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -60%) rotate(90deg);
}
```

Primero hay que crear el repositorio con estos dos archivos, dar permisos a nuestra compañera y crear las ramas master y dev.
A continuación hay un listado de ejercicios/tickets que habrá que ir resolviendo. Usaremos lo que hemos visto de PR pasando a dev cada tarea una vez completada. Cuando estén las 3 primeras en dev, haremos una subida a master, también por pull request.
Si os queréis animar a hacer los tickets 1 y 2 a la vez, cada miembro de la pareja puede ponerse con uno.



### Ticket #1: Centrar el careto:

Este señor está como apartado, en una esquina... eso no puede ser, debería estar centrado vertical y horizontalmente en la pantalla.



### Ticket #2: Cara redonda:

Un careto.. ¿es un careto si no es redondo?. Hay que redondear esa cara para que sea un círculo perfecto.



### Ticket #3: Cara Sonriente;

¿No está un poco serio? Hagamos que sonría un poco.



### Ticket #4: Añadir funcionalidad para que guiñe:
Sería genial si al hacer click el careto guiñase un ojo. Hay que tener en cuenta que al dejar de hacer hover sobre el careto tiene que volver a la posición inicial.

---

## Git collaborative

Let's do a Pull Request with code review.
We start with a base, html and css (above)

First we have to create the repository with these two files, give permissions to our partner and create the master and dev branches.
Next there is a list of exercises/tickets that we will have to solve.



### Ticket #1: Centre the face:

This man is kind of out of the way, in a corner... that can't be, he should be centred vertically and horizontally on the screen.



### Ticket #2: Round face:

A face... is it a face if it is not round? You have to round that face to make it a perfect circle.



### Ticket #3: Smiley Face:

Isn't he a bit serious? Let's make him smile a little.



### Ticket #4: Add functionality to make it wink:

It would be great if the face winked when you click on it. Keep in mind that when you stop hovering over the face it has to return to the initial position.
