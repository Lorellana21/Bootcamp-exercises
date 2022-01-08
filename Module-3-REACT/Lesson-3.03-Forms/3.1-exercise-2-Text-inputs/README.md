# Inputs de texto

Ahora vamos a ver cómo escuchar los cambios en un input de texto, guardar su valor en el estado y pintarlo.

1. Crear la constante en el estado.
1. Crear una función manejadora de evento asociado al input:
 - Guardar en esta función manejadora el valor del input en el estado.
 - Como siempre el valor del input está en ``ev.target.value``. También está en ``ev.currentTarget.value``.
3. Usar la constante del estado para pintarla donde queramos.

Para otros inputs de tipo email, number... el funcionamiento es exactamente igual.

---

# Text inputs

Now let's see how to listen for changes in a text input, save its value in the state and paint it.

1. Create the constant in the state.
2. Create an event handler function associated with the input.
- Store in this handler function the value of the input in the state.
- As always the value of the input is in ``ev.target.value``. It is also in ``ev.currentTarget.value``.
3. Use the state constant to paint it wherever you want.

For other inputs of type email, number... the operation is exactly the same.
