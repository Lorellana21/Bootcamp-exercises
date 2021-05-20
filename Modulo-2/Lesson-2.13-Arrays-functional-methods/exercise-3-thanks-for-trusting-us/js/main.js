`use strict`;

/*A los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map? */

const users = [
  { name: "Lucía", isPremium: true },

  { name: "María", isPremium: false },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];
console.log(users);
const greetings = [
  "Bienvenida Yolanda. Gracias por confiar en nosotros.",
  "Bienvenida Yolanda",
];
console.log(greetings);

const newGreetings = users.map((name) =>
  name.isPremium === true
    ? console.log("Bienvenida Yolanda. Gracias por confiar en nosotros.")
    : console.log("Hola Yolanda")
);

/*const sayHi = users.map((premium) => {
  if (premium.isPremium === false) {
    console.log("Bienvenida Yolanda");
  } else {
    console.log("Bienvenida Yolanda. Gracias por confiar en nosotros.");
  }
});*/
