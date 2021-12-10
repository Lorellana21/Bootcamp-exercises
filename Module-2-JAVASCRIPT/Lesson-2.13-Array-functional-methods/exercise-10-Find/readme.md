## Encuentra el usuario

a) En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método `find` para conseguirlo.

```
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];
```

b) Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array de usuarios? Usa el método `findIndex` para encontrar su posición y bórralo usando `splice`.

---

## Find the user

a) In our user management application, we have received an incident associated with PIN 5232. Can you find the user that corresponds to this PIN so that we can contact him/her? Use the `find` method to get it.

b) It turns out that the user has unsubscribed because of the incident :( Could you delete it from the user array? Use the `findIndex` method to find its position and delete it using `splice`.
