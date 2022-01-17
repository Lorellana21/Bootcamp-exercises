# Paranormal activity

En la lección en la que explicamos el segundo parámetro (el array) de `useEffect` decíamos: "Si no ponemos el array: la función se ejecutará siempre que se ejecute el componente `App`, es decir, siempre que se renderice".
Vamos a probarlo:

1. Crea un nuevo ejercicio desde tu React starter kit.
2. Añade un servicio para trabajar con el API:
   - En este servicio llama a la URL de las [series de televisión](https://api.tvmaze.com/search/shows?q=paranormal)
   - Retorna la respuesta del servidor en el `then` de este servicio.
3. En el componente `App`, en el `useEffect`:
   - Guarda la respuesta del servicio en el estado de React.
   - No pongas ningún array (ni vacío ni relleno) como segundo parámetro del `useEffect`.
   - No hace falta que pintes en pantalla la respuesta del API porque no nos interesa para este ejercicio.
4. Mira DevTools > Network y verás que hay una actividad para anormal.

¿Sabrías decir por qué pasa esto? ¿porque se llama repetidas veces al API? Sí, no... Queremos solucionarlo para que solo se llame al API una vez. Para ello.

1. Revisa la mini lección en la que explicamos para qué es el segundo parámetro del `useEffect`.
2. Comprueba en DevTools > Network que al refrescar la página solo se llama una vez al API.
3. Razona porque se estaba renderizando muchas veces el componente.

---

# Paranormal activity

In the lesson where we explained the second parameter (the array) of `useEffect` we said: "If we don't put the array: the function will be executed whenever the App component is executed, that is, whenever it is rendered".
Let's try it:

1. Create a new exercise from your React starter kit.
2. Add a service to work with the API:
   - In this service call the URL of the [TV series](https://api.tvmaze.com/search/shows?q=paranormal).
   - Return the response from the server in the then of this service.
3. In the `App` component, in the `useEffect`:
   - Store the response from the service in the React state.
   - Do not put any array (neither empty nor filled) as the second parameter of the `useEffect`.
   - You don't need to paint the API response on the screen because we are not interested in it for this exercise.
4. Look at DevTools > Network and you will see that there is an activity for abnormal.

Can you tell why this is happening because the API is called repeatedly? Yes, no... We want to fix it so that the API is only called once. To do this.

1. Check the mini lesson where we explain what the second parameter of the `useEffect` is for.
2. Check in DevTools > Network that when refreshing the page the API is only called once.
3. Reason why the component was being rendered many times.
