# Modificar arrays del estado

Como ya sabemos, en el estado metemos datos que pueden ser modifcados por la usuaria. Así, cuando la usuaria los cambie, React detectará el cambio y volverá a renderizar la página con los datos actualizados.
En el siguiente ejemplo pintamos un listado de series. Y cuando la usuaria pulse en una serie la marcamos como favorita o no favorita.

1. Escuchamos un evento:
   - En este caso lo escuchamos en el ``<li key={serie.id} id={serie.id} onClick={handleFavorite}>``:
       - Cuando la usuaria haga ``click`` se ejecutará la función manejadora ``handleFavorite``.
       - Hemos añadido el ``id={serie.id}`` porque en la función manejadora necesitamos saber qué serie ha sido clickada.
2. Dentro de la función manejadora ``handleFavorite`` **modificamos el estado**:
   - Modificamos los datos del array.
   - Y guardamos el array modificado en el estado usando la función ``setSeries``.
3. React renderiza otra vez la página:
   - Pintando las series desde la función ``renderSeries`` con un map.

---

# Modify arrays of the status

As we already know, in the state we put data that can be modified by the user. So, when the user changes it, React will detect the change and re-render the page with the updated data.
In the following example we paint a list of series. And when the user clicks on a series we mark it as favourite or not favourite.

1. We listen for an event:
   - In this case we listen for it on the ``<li key={serie.id} id={serie.id} onClick={handleFavorite}>``:
       - When the user ``clicks`` the ``handleFavorite`` handler function will be executed.
       - We have added the ``id={serie.id}`` because in the handler function we need to know which series has been clicked.
2. Inside the ``handleFavorite`` handler function we **modify the state**:
    - We modify the array data.
    - And we save the modified array in the state using the ``setSeries`` function.
3. React renders the page again:
   - Painting the series from the ``renderSeries`` function with a map.


