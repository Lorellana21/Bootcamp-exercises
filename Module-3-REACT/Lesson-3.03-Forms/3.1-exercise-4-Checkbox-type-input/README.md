# Inputs de tipo Checkbox

Con los inputs de tipo checkbox nos pasa un poco lo mismo que con los select. El funcionamiento de React es exactamente igual, pero cambia un detalle.
En este ejemplo vamos a ver la típica pregunta de las tiendas online en la que nos dan la opción de envolver para regalo el producto que estamos comprando:

Aquí estamos haciendo las mismas tres operaciones de siempre: **escuchar el evento, actualizar el estado dentro del evento y repintar**.

Lo especial de **los checkbox es que cuando los marcamos o desmarcamos no cambian su valor**, es decir, su propiedad `value`. Por lo tanto, para qué queremos gestionar un dato que nunca cambia.

Lo que **sí que cambia en los inputs de tipo checkbox es su propiedad `checked`**, que es un booleano, `true` si está marcado y `false` si no lo está. Por ese motivo hacemos:

- Inicializar su estado con un booleano, el que consideremos: `const [giftWrap, setGiftWrap] = useState(false);`.
- Guardar en el estado la propiedad checked: `setGiftWrap(ev.target.checked);`.

Por cierto, en el código hemos puesto la línea `{giftWrap === true ? 'Sí' : 'No'}`. Estamos usando un operador ternario que en función del valor `giftWrap` pinta en el HTML un Sí o un No. Recordemos que dentro del HTML de React no podemos poner un `if` porque es una sentencia que no genera un valor, pero **un ternario es una expresión, es decir, un if especial que sí genera un valor**.

---

# Checkbox type inputs

With checkbox inputs it's the same as with select inputs. The way React works is exactly the same, but one detail changes.
In this example we are going to see the typical question of the online shops in which they give us the option of gift wrapping the product we are buying.
