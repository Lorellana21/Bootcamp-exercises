# Inputs de tipo Select

Para trabajar con select es igual que con un input de tipo texto, pero hay algunos detalles especiales. Estos detalles tienen que ver más con la usabilidad del formulario que con temas de React.

Los detalles especiales son:

- El select muestra por defecto la primera opción que tiene. En el ejemplo es `<option>S</option>`. Para que al arrancar la página haya coherencia entre la opción que está mostrando el select y el texto "Tu talla de camiseta es: S." tenemos que iniciar el estado de `size` con la string 'S'. Por eso hemos puesto la línea de código `const [size, setSize] = useState('S');`. Si no hacemos esto el select mostrará la opción S y la página pintará el texto "Tu talla de camiseta es: ".
- El evento se lo ponemos siempre a la etiqueta select, por ello hemos puesto `<select name="size" id="size" onChange={handleSize}>`. El `onChange` no debemos ponerlo en las etiquetas `<option>` porque en realidad éstas nunca cambian, lo que cambia de valor es el `<select>`.

---

# Select type inputs

Working with select is the same as working with a text input, but there are some special details. These details have more to do with the usability of the form than with React issues.

Special details are:

- The select defaults to the first option it has. The example is `<option>S</option>`. To ensure consistency between the option shown in the select and the text "Your t-shirt size is: S." we need to start the `size` state with the string 'S'. That's why we have put the line of code `const [size, setSize] = useState('S');`. If we don't do this the select will show the option S and the page will paint the text "Your t-shirt size is: ".
- The event is always set to the select tag, so we have put ``<select name="size" id="size" onChange={handleSize}>``. The ``onChange`` should not be placed in the ``<option>`` tags because they never really change, it is the ``<select>`` that changes value.
