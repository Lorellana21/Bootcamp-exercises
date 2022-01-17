//Crear una función llamada callToApi.
//Esta función se puede llamar como quieras, es una función normal y corriente.
const callToApi = () => {
  // Llamamos al API
  //Ejecutar y retornar un fetch.
  //Es muy importante no olvidarnos de retornar el fecth, sino no podremos usarlo en el componente src/components/App.js, por eso siempre escribimos return fetch(...).
  return fetch("https://swapi.dev/api/people/5")
    .then((response) => response.json()) //Convertimos la respuesta del servidor a JSON con .then(response => response.json()).
    .then((response) => {
      // Cuando responde el API podemos limpiar los datos aquí
      const result = {
        name: response.name,
        birthYear: response.birth_year,
        height: response.height,
        mass: response.mass,
        eyeColor: response.eye_color,
      };
      return result; //Retornamos los datos dentro del último then con return result;
    });
};

export default callToApi;
//Exportamos la función con export default callToApi;
//para poder importarla en el componente App.
//Si le cambiamos el nombre a la función callToApi por pepino aquí escribiríamos export default pepino;

//Este servicio es únicamente código JS. No debemos poner código JSX porque no queremos usar HTML aquí dentro.
//Este servicio podríamos moverlo a otro proyecto que no sea de React y funcionaría correctamente.
