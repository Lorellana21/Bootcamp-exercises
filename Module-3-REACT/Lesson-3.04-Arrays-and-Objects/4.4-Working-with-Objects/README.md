# ¿Cómo trabajar con los objetos en React?

Trabajar con objetos en React es igual que trabajar con arrays. Aquí tenemos un código en el que le pedimos a la usuaria que rellene sus datos postales para enviarle un pedido:

Como ves, al arrancar, estamos declarando la constante de estado con un objeto vacío:

```

const [shipping, setShipping] = useState({});
```

También podríamos haberla declarado con sus propiedades:

```

const [shipping, setShipping] = useState({ address: '', city: '' });
```

En las funciones manejadoras hacemos lo de siempre, modificar el objeto y luego guardarlo en el estado con la función `setShipping()` para que React renderice la página.

Recuerda que cuando guardamos un array en el estado usamos spread, por ejemplo `setSeries([...series])`. Aquí utilizamos lo mismo pero como es un objeto usamos las llaves: `setShipping({ ...shipping });`.
