# Mis series favoritas

En esta lección tenemos un ejemplo de cómo trabajar con las series favoritas pero con un solo array. Queremos practicar a trabajar con diferentes arrays. Para ello:

1. Crea un ejercicio nuevo con tu React starter kit.
1. Copia el código del ejercicio de las series favoritas.
1. En este ejercicio ya hay un estado con las series que es:

```

const [series, setSeries] = useState([
{ id: '123', isFavorite: false, name: 'Juego de tronos' },
{ id: '456', isFavorite: false, name: 'Las chicas Gilmore' },
{ id: '678', isFavorite: false, name: 'Gambita de Dama' }
]);
```

Este array guarda las series y si son favoritas o no. Queremos cambiarlo para que la gestión de una serie favorita se haga en otro array. Para ello sustituye el código anterior por:

```

const [series, setSeries] = useState([
  { id: '123', name: 'Juego de tronos' },
  { id: '456', name: 'Las chicas Gilmore' },
  { id: '678', name: 'Gambita de Dama' }
]);
const [favorites, setFavorites] = useState([]);
```

1. Refactoriza el código del componente para que cuando la usuaria marque una serie como favorita no se modifique el array `series`. En vez de esto, debemos añadir y sacar del array `favorites` las series que la usuaria ha marcado como favorita.

---

# My favourite series

In this lesson we have an example of how to work with the favourite series but with a single array. We want to practice working with different arrays. To do this:

1. Create a new exercise with your React starter kit.
1. Copy the code from the favourite series exercise.
1. In this exercise there is already a state with the series that is:

```

const [series, setSeries] = useState([
{ id: '123', isFavorite: false, name: 'Juego de tronos' },
{ id: '456', isFavorite: false, name: 'Las chicas Gilmore' },
{ id: '678', isFavorite: false, name: 'Gambita de Dama' }
]);
```

This array stores the series and if they are favourites or not. We want to change it so that the management of a favourite series is done in another array. To do this, replace the previous code with:

```

const [series, setSeries] = useState([
  { id: '123', name: 'Juego de tronos' },
  { id: '456', name: 'Las chicas Gilmore' },
  { id: '678', name: 'Gambita de Dama' }
]);
const [favorites, setFavorites] = useState([]);
```

1. Refactor the code of the component so that when the user marks a series as favourite, the series array is not modified. Instead, we must add and remove from the array favourites the series that the user has marked as favourite.
