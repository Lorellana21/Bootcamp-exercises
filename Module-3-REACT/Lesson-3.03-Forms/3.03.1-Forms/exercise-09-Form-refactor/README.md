# Refactor del formulario

Vamos a hacer un pequeño refactor del código del ejercicio anterior: usaremos una única
función escuchadora para el evento `change` de cada campo. Para eso, recordad que podemos acceder a la clave de un objeto cuyo nombre tenemos en una variable usando el operador `[key]` siendo `key` la variable que tiene el nombre de un campo del objeto. Por ejemplo:

```

this.state = {
    name: 'Groundhog Day',
    description:
      'A weatherman finds himself inexplicably living the same day over and ov
};
...
...
onChange = event => {
    const name = event.target.name;
    this.setState({
       [name]: 'Leaving Las Vegas'
    });
}
```

---

# Form refactor

We are going to make a small refactor of the code from the previous exercise: we will use a single listener function for the `change` event of each field. For that, remember that we can access the key of an object whose name we have in a variable using the operator `[key]` where `key` is the variable that has the name of a field of the object.
