## Gracias por confiar en nosotros

Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.

Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.

Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con `map`?

```
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];
```

---

## Thank you for trusting us

We continue to develop our market-breaking web application. But first, we would like to thank our premium (paying) users for their help in greeting the application. Therefore, we would like to say 'Welcome Yolanda, thank you for trusting us., and keep the simple greeting 'Welcome Yolanda' for the rest of the users.

Let's start from this array with the list of users that includes both their name and whether they are premium users or not.

We have to create a new array with the greetings. Can we do it with map?
