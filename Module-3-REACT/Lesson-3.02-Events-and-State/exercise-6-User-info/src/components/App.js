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
      <>
        <form action="ejemplo.php" method="get">
          <input
            type="text"
            name="nombre"
            size="40"
            placeholder="Nombre"
          ></input>

          <input type="text" name="apellido" placeholder="Apellido"></input>
          <br></br>

          <input
            type="number"
            name="día"
            value="h"
            placeholder="Día de cumpleaños"
          ></input>
          <input type="number" name="mes" value="m" placeholder="Mes"></input>
          <input type="number" name="año" value="m" placeholder="Año"></input>
          <br></br>

          <input type="submit" value="Enviar"></input>
          <br></br>
          <input type="reset" value="Borrar"></input>
        </form>
      </>
    );
  }
}

export default App;
