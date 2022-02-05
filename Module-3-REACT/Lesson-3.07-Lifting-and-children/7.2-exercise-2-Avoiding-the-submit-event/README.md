# Evitando el evento submit

¿Qué componente tiene la responsabilidad de prevenir el envío del formulario en el ejercicio del carro de la compra? ¿De `App`, de `Form` o de otro componente?

La responsabilidad de hacer el `ev.preventDefault()` del evento submit de un formulario es del componente que tiene la etiqueta `form`. Dicho de otra forma, si yo soy el encargado de crear un formulario también soy el encargado de que dicho formulario funcione bien.

Pero, ¿quién necesita saber que la usuaria ha pulsado en Enviar y quiere que sus datos se envíen al servidor? Pues el componente `App`, ya que es el más listo de todos y el que lo controla todo.

Por ello debemos poner un poco de funcionalidad en el componente `Form` y otro poco de funcionalidad en `App`. Sigue los siguientes pasos:

1. En la función `handleForm` de `App`:

   1. Borra `ev.preventDefault();` ya que no es su responsabilidad.
   2. Puesto que esta función ya no usa el parámetro `ev` bórralo también.

2. En el retorno de App:

   1. Pasa a `Form` una prop llamada `handleFormSubmit`. El valor de esta prop debe ser la función `handleForm` de `App`. Todo esto lo hacemos para poder hacer lifting, para que `Form` avise a `App` de que la usuaria quiere enviar el formulario.

3. En el componente `Form`:
   1. Crea una función manejadora llamada `handleForm`.
   2. Asocia esta función al `onSubmit` del formulario.
   3. En esta función haz el `ev.preventDefault();` ya que sí es su responsabilidad.
   4. Ejecuta `props.handleFormSubmit` para hacer el lifting.

Al programar un componente debemos preguntarnos siempre: **¿Cuáles son las responabilidades de este componente y cuáles no?**
