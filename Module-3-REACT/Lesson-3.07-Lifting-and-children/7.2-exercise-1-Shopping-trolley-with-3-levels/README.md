# Tres niveles en el carro de la compra

![](https://774018087-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2Fd166b2b851e87f98072ec24e236b54308aec8589.png?generation=1631780516651902&alt=media)

Continuamos el ejercicio del carro de la compra. Necesitamos que además de `App` hayas creado al menos un componente que haga lifting, como por ejemplo `InputGroupText`.

Queremos crear el componente `Form` para que la jerarquía de componentes sea:

1. App (primer nivel)
   1. Form (segundo nivel)
      - `InputGroupText`: para el nombre (tercer nivel).
      - `InputGroupText`: para el email (tercer nivel).
      - `InputGroupSelect`: para la región (tercer nivel).
      - `InputGroupRadio`: para el pago con tarjeta de crédito (tercer nivel).
      - `InputGroupRadio`: para el pago con efectivo (tercer nivel).
      - `InputGroupRadio`: para el pago contra reembolso (tercer nivel).
      - `InputGroupCheck`: para los términos legales (tercer nivel).
      - `Button`: para el botón de Enviar (tercer nivel).
      - `Button`: para el botón de Limpiar el formulario (tercer nivel).
   2. Preview (segundo nivel)

Para ello:

1. Crea el componente ``Form``.
2. Mueve todo el código que está dentro de la etiqueta ``<form className="form" onSubmit={handleForm}>`` a este nuevo componente.
3. El componente ``Form`` está usando el componente ``InputGroupText``. Ahora el componente ``Form`` debe recibir por props los datos que debe pasar el componente ``InputGroupText``. El componente ``Form`` debe hacer de intermediario entre ``App`` e ``InputGroupText``.

Ahora que estás trabajando con tres niveles cobra mucha más importancia el uso de DevTools > Components, el debugger y leer y entender muy bien los errores que React nos muestra, son de gran ayuda.
