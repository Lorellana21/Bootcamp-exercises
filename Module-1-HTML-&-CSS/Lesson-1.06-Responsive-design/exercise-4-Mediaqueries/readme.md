Crea un index.html que contenga:
Create an index.html containing:

```<!DOCTYPE html>
<html lang="en"><head>    
<meta charset="UTF-8">   
 <title>Viewport Sample</title>
 </head>
 <body>    
 <div class="box"></div>
 </body>
 </html>```
 
1) Sin que sirva de precendente, incluiremos una etiqueta `style` en el `head` con:
1) Without being a precursor, we will include a `style` tag in the `head` with:

```.box {  
 background: red;  
 height: 100px;
}```

Veremos que el div .box ocupará el ancho disponible y tendrá 100px de alto, y fondo rojo.
We`ll see that the .box div will occupy the available width and will be 100px high, with a red background.

2) Añadamos nuestra primera mediaquery: vamos a hacer que por encima de 550px el elemento .box tenga fondo azul. Para ello el CSS dentro de nuestra etiqueta `style` quedará así:
2) Let's add our first mediaquery: we're going to make the .box element above 550px have a blue background. To do this the CSS inside our `style` tag will look like this:

```.box {  
 background: red;  
 height: 100px;
}
@media all and (min-width:550px) {  
 .box {  
 background: blue;  
 }
}```

Si ahora redimensionamos la ventana del navegador veremos que a partir de 550px de ancho nuestro elemento .box se vuelve azul.
Nota: A cada una de estas medidas que ponemos en los mediaqueries las llamamos breakpoints, o puntos de ruptura.
If we now resize the browser window we will see that from 550px wide our .box element turns blue.
Note: We call each of these measures that we put in the mediaqueries breakpoints.

3) Abramos ahora las herramientas de desarrollo de Chrome y lancemos el simulador de dispositivos móviles. Probemos varios dispositivos o resoluciones. ¿Qué pasa? ¿Cuándo se vuelve azul? ¿Cuándo se vuelve rojo?

3) Now let's open Chrome's developer tools and launch the mobile device simulator. Let's try several devices or resolutions. What happens? When does it turn blue? When does it turn red?
