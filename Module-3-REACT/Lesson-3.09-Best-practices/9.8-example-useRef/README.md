# ¿Para qué es el hook useRef?

React nos ayuda a trabajar fácilmente con el HTML de nuestras páginas. Pero hay algunas cosas que no sabe hacer bien. Para las cosas que no sabe gestionar el equipo de React ha creado el hook useRef que viene a ser un: toma esto y búscate la vida maja.
Por ejemplo, desde React no podemos poner el foco en un input, pero sí desde JS, así que usamos el código de App.js.

Con las líneas de código:

```

const inputEl = useRef();

// ...

<input ref={inputEl} type="text" />
```

React hace:

```
const inputEl = {
  current: document.querySelector('input')
};
```

Es decir, mete en `inputEl` un objeto con la propiedad `current` que es la etiqueta HTML. A partir de ahí nosotras podemos escuchar eventos, cambiar su innerHTML o todo lo que queramos accediendo a la etiqueta a través de `inputEl.current`.
