# Formulario y preview de un email:

![]("./images/i.jpg")

![](https://774018087-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MdR67vc7P9nPSm8gsCY%2Fsync%2F26160e5efe8d6e72b28567a80d012c1477fe28d4.png?generation=1631780516857965&alt=media)

1. El componente `App` le pasa por pros a `Form` la función `udpateEmail`:

   - Esto lo hace con la línea `<Form updateEmail={updateEmail} />`.
   - Pasar una prop a una hija se escribe de la misma manera, independientemente de si es de tipo string o number o función...
   - El componente `Form` recibe por props un **objeto**, que dentro tiene una propiedad `updateEmail` que es una función arrow:

   ```
   {
   updateEmail: (email) => { ... }; // esto es una función
   }
   ```

   - Dicho de otra forma, el componente `Form` puede ejecutar la función con el código `props.updateEmail()`.

2. Esperamos a que la usuaria cambie el input del email y cuando esto sucede:

   1. En el componente `Form` se ejecuta la función `handleEmail()`.
   1. En la función `handleEmail` ejecutamos la función que recibimos por `props.updateEmail()`.
   1. Ejecutamos esta función con los argumentos que queremos. En este caso el valor del input de email: `props.updateEmail(ev.target.value)`.
      Es en este momento cuando **sucede el lifting**.

3. El componente `Form` ha ejecutado la función `upadteEmail()` de `App`, a continuación.

   1. La función `updateEmail` recibe por parámetros el email de la usuaria.
   1. La función `updateEmail` ejecuta `setEmail(email)` y actualiza así el estado de React.

4. React se da cuenta de que el estado del componente `App` ha cambiado, y entonces:
   1. React renderiza el componente `App` porque su estado ha cambiado.
   1. El componente `App` le pasa nuevas props al componente `Preview` con la línea `<Preview email={email} />`.
   1. El componente `Preview` se renderiza porque tiene nuevas props y pinta el email actualizado.
