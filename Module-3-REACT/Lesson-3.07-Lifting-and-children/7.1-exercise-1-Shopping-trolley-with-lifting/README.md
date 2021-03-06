# Carro de la compra con lifting:

![](https://774018087-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2Fd166b2b851e87f98072ec24e236b54308aec8589.png?generation=1631780516651902&alt=media)

El objetivo del ejercicio es coger el código que está en un solo componente `App2`, y despiezarlo en componentes más pequeños y reutilizables, pasándoles props y haciendo lifting.

Te recomendamos usar mucho la herramienta DevTools > Components para saber qué datos le estás pasando a los nuevos componentes. También te recomendamos poner un `debugger` en las funciones `handleLoQueSea` del componente `App` para saber qué estás recibiendo por el lifting.

---

**Ejercicio 1. Crear el componente Preview**

Esta es la pieza más sencilla, la única que solo tiene props y no tiene lifting: el preview.

- Crea un componente `Preview`.
- Mueve la etiqueta `<div className="preview">` desde `App` a `Preview`.
- Desde `App` debes pasar las props que `Preview` necesita.

La única prop que a lo mejor te cuesta un poco saber cómo pasarla es la del método de pago. Para ello:

- Pasa al componente `Preview` la prop `paymentType`.
- Mueve la función `const renderPaymentTypeText = () => { ... }` desde el componente `App` a `Preview`.
- Cambia un poco la función `renderPaymentTypeText` para que use la `prop.paymentType` en vez de la constante `paymentType`.

---

**Ejercicio 2. Crear el componente InputGroupText (guarrete)**

Vamos a crear el componente `InputGroupText` que tiene que recibir props y además hacer lifting.

- Crear el componente `InputGroupText`.
- Pasarle los datos que necesita por props.
- Que haga un lifting guarrete. En el siguiente ejercicio haremos que el lifting sea limpio y elegante.

  Para ello:

1.  Crea el componente `InputGroupText`.

2.  En el código de `App` hay dos etiquetas `<div className="input-group-text">`. Mueve la primera, la que recubre el input y el label del nombre al componente `InputGroupText`.

3.  El código que acabas de mover está "acoplado" al nombre de la usuaria porque contiene cosas como "Escribe un nombre", es decir, no es un componente reutilizable. Vamos a hacerlo reutilizable. Para ello pásale desde `App` a `InputGroupText` todas las props que necesita para convertirse en un componente genérico. Estas props son:

    - `labelText`: el texto que va dentro del label.
    - `inputName`: el atributo `name` del input.
    - `inputId`: el atributo `id` del input y el `for` del label.
    - `inputPlaceholder`: el atributo `placeholder` del input.
    - `inputValue`: el valor del input.

4.  El componente `InputGroupText` también necesita la función para hacer lifting. Pásale desde `App` a `InputGroupText` la prop:

- `handleChange`: cuyo valor debe ser la función `handleName`.

5. Ahora que el `InputGroupText` ya está recibiendo todas las props que necesita, usa estas props dentro del código del retorno del componente.

---

**Ejercicio 3. Crear el componente InputGroupText (inmaculado)**

Lo que está pasando ahora mismo es que cuando la usuaria cambia su nombre, el componente `InputGroupText` hace lifting hacia arriba subiendo todo el evento. El componente `App` recibe en la función handleName todo el evento con demasiada información y para encontrar la info que quiere tiene que hacer `ev.target.value`.

Para ser programadoras exquisitas vamos a:

1. Pon un debugger en la primera línea de la función `handleName` de `App.js`:

   - En la web cambia el nombre de la usuaria.
   - Mira qué información está recibiendo por parámetros esta función.

2. En el componente `InputGroupText`:

   - Crea una función manejadora llamada por ejemplo `handleInputChange`.
   - Asigna esta función manejadora al evento `onChange` del input.
   - Dentro de la función manejadora vamos a ejecutar la función `handleChange` que estamos recibiendo por props.
   - La función `handleChange` la debemos ejecutar pasando como argumento el `ev.target.value`.
   - De esta forma desde el componente `InputGroupText` solo envía hacia arriba el valor del input y no todo el evento.

3. En el componente `App`:

   - Ya no estamos recibiendo por parámentro el evento entero, sino el valor del input. Por ello cambia el nombre del parámetro de `ev` a `value`.
   - Guarda en el estado de React el `value` con la función `setName`.

4. Vuelve a poner el `debugger` en la primera línea de la función `handleName` de `App.js`:
   - Vuelve a mirar qué recibes por parámetro en esta función.
   - ¿Te acuerdas lo que recibías al inicio de este ejercicio?
   - ¿Te parece que la información que estás recibiendo ahora es más limpia?

---

**Ejericio 4. Reutilizar el componente InputGroupText**

Ahora que ya tienes el componente `InputGroupText` con un código exquisito vamos a reutilizarlo. Queremos sustituir en `App` el código:

```
<div className="input-group-text">
  <label className="label-text" htmlFor="email">
    Escribe un email:
  </label>
  <input
    className="input-text"
    type="email"
    name="email"
    id="email"
    placeholder="mariagarcia@gmail.com"
    value={email}
    onChange={handleEmail}
  />
</div>
```

por el componente `InputGroupText`.

1. Sustituye el código anterior por `<InputGroupText />`.
2. Añade al código `<InputGroupText />` todas las props que necesita.
3. Añade también la función `handleEmail` para poder hacer lifting.
4. Refactoriza la función `setEmail` porque ahora esta recibe el valor del input y no el evento.

---

**Ejericio 5. Crear el componente InputGroupSelect**

Crear el componente `InputGroupSelect` y mover el selector de región desde `App` a este nuevo componente.

También queremos que `InputGroupSelect` sea un componente limpito, así que solo debe enviar hacia arriba por lifting el valor del select, por lo que también hay que cambiar mínimamente la función `handleRegion` de `App`.

---

**Ejercicio 6. Crear el componente InputGroupRadio**

Crea este componente y mueve el código de la tarjeta de crédito. Queremos que este componente sea reutilizable para poder utilizarlo también con las opciones de Efectivo y Contra reembolso. Y cómo no, también queremos que sea limpio, por ello sube por lifting el valor del input, no todo el evento.

---

**Ejericico 7. Crear el componente InputGroupCheck**

Crea un componente nuevo, esta vez con el checkbox de los términos legales, mueve el código, pásale props, pásale la función de lifting, refactoriza un poco la función `handleLegalTerms` de `App`...

---

**Ejericio 8. Crear más componentes**
Aún quedarían un par de componentes más por crear como son el botón de Enviar y el de Limpiar el formulario. Crea los correspondientes componentes para estos botones.

Aunque uno sea un input de tipo `submit` y el otro un `button`, si quieres puedes usar un único componente para ambos:

1. Crea el componente `Button`.
1. Mueve el código del botón "Limpiar el formulario" dentro de este componente.
1. Pásale las props y la función para hacer lifting.
1. Reutilizalo para el botón de Enviar.

- No pasa nada porque a partir de ahora el botón de Enviar no sea un input de tipo submit y sea un button siempre y cuando la página siga funcionando igual.

---
