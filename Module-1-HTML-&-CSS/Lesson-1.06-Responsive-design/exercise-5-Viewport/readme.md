Vamos a añadir al `head` de nuestra página el tag meta viewport quedando toda nuestra página así:

~~~
<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Viewport Sample</title>
<style>
.box {
     background: red;
     height: 100px;
     }
     @media all and (min-width:550px) {
         .box {
             background: blue;
             }
             }
</style>
</head>
<body>
<div class="box"></div>
</body>
</html>
~~~

¿Qué tal ahora? ¿Si nos vamos a las herramientas de desarrollo, abrimos el simulador y probamos con diferentes dispositivos/anchos? ¿Cambia ahora de rojo a azul?

***

We are going to add to the `head` of our page the meta viewport tag and our whole page will look like above.
How about now, if we go to the development tools, open the simulator and try different devices/widgets, does it now change from red to blue?
