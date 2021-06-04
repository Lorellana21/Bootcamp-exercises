// Vamos a partir de un objeto con información de un usuario que tenemos en el estado de nuestro componente. Lo vamos a inicializar a este valor directamenete en el constructor.
// Vamos a crear un formulario donde vamos a poder modificar estos campos del estado.
// NOTA: Cuidado al modificar los campos anidados dentro del objeto birthDate; recuerda que para modificarlos es muy útil usar en el setState el operador spread ... para mantener el resto de datos de ese objeto. Por ejemplo:

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ada",
      lastName: "Lovelace",
      birthDate: {
        day: 10,
        month: "diciembre",
        year: 1815,
      },
    };
  }

  handleChange(ev) {
    this.setState((prevState) => {
      return {
        birthDate: {
          ...prevState.birthDate,
          day: ev.target.value,
        },
      };
    });
  }

  render() {
    return (
      <form action="ejemplo.php" method="get">
        <p>
          Nombre: <input type="text" name="nombre" size="40"></input>
        </p>
        <p>
          Apellido: <input type="text" name="apellido"></input>
        </p>
        <p>
          Fecha de cumpleaños:
          <input type="number" name="día" value="h">
            {" "}
            Día
          </input>
          <input type="number" name="mes" value="m">
            {" "}
            Mes
          </input>
          <input type="number" name="año" value="m">
            {" "}
            Año
          </input>
        </p>
        <p>
          <input type="submit" value="Enviar"></input>
          <input type="reset" value="Borrar"></input>
        </p>
      </form>
    );
  }
}

export default App;
