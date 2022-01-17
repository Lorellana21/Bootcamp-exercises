En el siguiente ejercicio hemos creado un input para buscar personajes de Star Wars. Cada vez que la usuaria escriba algo en el input llamaremos al API para que haga una nueva búsqueda. Cuando el API responda pintaremos el listado de personajes.

En el fichero `src/components/App.js` la parte importante es:

- Llamamos al API pasándo por parámetros el `searchName` para poder enviarlo al API.
- El `useEffect` depende de `searchName` porque solo queremos llamar al API cuando `searchName` cambie. Por eso hemos puesto en el segundo parámetro del `useEffect` un array con `searchName`:

```
 useEffect(() => {
  // ...
 }, [searchName]);
```

En el fichero `src/services/api.js` la parte importante es:

- Al declarar la función `callToApi` recibimos por parámetro `searchName` por ello ponemos `const callToApi = (searchName) => {`.
- Interpolamos `searchName` en la URL para enviarlo al API, por ello ponemos `` return fetch(`https://swapi.dev/api/people/?search=${searchName}`) ``.
