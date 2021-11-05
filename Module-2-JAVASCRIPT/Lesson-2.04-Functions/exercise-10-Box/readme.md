## Calculador de modelo de caja

Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las
dimensiones de un elemento: `border-box` y `content-box`. Vamos a realizar una calculadora a la que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta:
`El ancho del contenido es: 30px y el ancho total de la caja es: 34px`

La función tendrá 4 parámetros:

- el primero será un booleano para especificar si es `border-box` o no.
- el segundo será un número con el `width` de la caja.
- el tercero será un número con el `padding` .
- el cuarto será un número con el `border-size` .

Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.

---

## Box model calculator

As we have seen in the previous classes, in CSS we have two types of calculation for the element dimensions: `border-box` and `content-box`. We are going to make a calculator and we'll pass 4 parameters, it will return the width of the content, and the total width of the box in a string like this:
`The width of the content is: 30px and the total width of the box is: 34px`

The function will have 4 parameters:

- the first will be a boolean to specify if it is `border-box` or not.
- the second will be a number with the `width` of the box.
- the third will be a number with the `padding` .
- the fourth will be a number with the `border-size` .

To test that it works, run the function, collect the result in a variable, and print it out
in the console.
