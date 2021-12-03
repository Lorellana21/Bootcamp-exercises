## Castigo

La hemos fastidiado. Otra vez. Y el profe nos ha castigado, ¡y encima sin tener la razón! Nos ha pedido que escribamos 100 veces en la pizarra una frase. ¿Podremos hacer un poco de trampa para que nos ayude JavaScript? Vamos a crear todos los elementos HTML como hemos aprendido en esta sesión, es decir, sin `innerHTML` ;)

1. Repítelo 100 veces

   ¡Es hora de actuar! En la pizarra (nuestra página web) tenemos que escribir 100 veces la frase "He aprendido bien cómo funcionan los bucles". Cada frase en una línea diferente. ¿Podremos conseguirlo? 

1. Un combo por frase

   ¡Seguimos con nuestra pizarra! Ahora vamos a añadir un combo (elemento `select` de HTML) al final de cada línea de texto. En el combo podremos seleccionar un color de los siguientes: blanco, azul, rojo, verde, amarillo, rosa. Por defecto, el combo tendrá seleccionado el color blanco que es el color del texto de los párrafos.

1. Vamos a darle color

   Ahora viene lo bueno: vamos a añadir el comportamiento a la web para que al modificar un combo se cambie el color del texto de esa línea al color indicado en el combo. Por ejemplo, si modificamos el color del combo de la línea 3 a rosa, el texto de la línea 3 se convierte en rosa.
   Algunas pistas para esta tercera parte:

   - primero haced funcionar un combo para una única línea
   - investigad cómo funciona el evento `change` de los elementos tipo `select` [documetación de MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   - desde el objeto `event` de la función de callback, podemos acceder al `select` que ha provocado el evento mediante `event.currentTarget`; incluso al índice (como en un array) de la opción seleccionada con `event.currentTarget.selectedIndex`

---

## Punishment

We screwed up. Again. And the teacher has punished us, and he's not even right! He has asked us to write a sentence 100 times on the blackboard. Can we cheat a bit to get JavaScript to help us? Let's create all HTML elements as we have learned in this session, i.e. without `innerHTM` ;)

1. Repeat it 100 times

It's time to act! On the whiteboard (our web page) we have to write 100 times the sentence "I've learned well how loops work". Each sentence on a different line. Can we do it?

1. One combo per sentence

We continue with our blackboard! Now we are going to add a combo (HTML `select` element) at the end of each line of text. In the combo we will be able to select one of the following colours: white, blue, red, green, yellow, pink. By default, the combo will have white selected, which is the colour of the text in the paragraphs.

1. Let's give it colour

Now comes the good part: we are going to add the behaviour to the web so that when we modify a combo, the colour of the text of that line changes to the colour indicated in the combo. For example, if we modify the colour of the combo in line 3 to pink, the text in line 3 becomes pink.

Some hints for this third part:

- first run a combo for a single line.
- investigate how the `change` event of `select` elements works [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
- from the `event` object of the callback function, we can access the `select` that triggered the event with `event.currentTarget`; even the index (as in an array) of the selected option with `event.currentTarget.selectedIndex`
