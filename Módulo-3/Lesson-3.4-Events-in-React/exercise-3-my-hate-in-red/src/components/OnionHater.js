import React from "react";

// Partiendo del código del ejercicio 1, vamos a hacer que nuestro componente ocupe toda la pantalla disponible, y tenga el textarea en el centro. Vamos a hacer que al detectar la palabra cebolla en el texto del textarea, ponga el fondo del componente de color rojo. Al volver a un texto sin cebolla, el fondo vuelve a ser blanco.
// Guardaremos la información de si estamos odiando o no en un atributo de la clase. Para ello en el constructor pondremos this.isHating = false.
// En la función que maneja el evento change del textarea modificaremos el atributo isHating y usaremos el método this.forceUpdate() para forzar el repintado.
// PISTA: recuerda que para que el this funcione correctamente en nuestra función de handle debemos hacer el bind adecuado en el constructor
//BONUS: ¿Podrías hacer que nuestro odio aparezca tanto si 'cebolla' tiene mayúsculas o minúsculas?

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false; //valor por defecto

    this.handleOnionChange = this.handleOnionChange.bind(this);
  }

  handleOnionChange(ev) {
    if (ev.target.value.toLowerCase().includes("cebolla")) {
      this.isHating = true;
      this.forceUpdate(); //con esto se esta enterandod e que cambia
    } else {
      this.isHating = false;
      this.forceUpdate();
    }
  }

  render() {
    const className = this.isHating === true ? "foodLabelOnion" : "foodLabel";
    return (
      <>
        <div className={className}>
          ¿Qué te gusta comer?
          <input
            className="foodInput"
            id="comida"
            type="textarea"
            placeholder="Cebolla"
            onChange={this.handleOnionChange}
          ></input>
        </div>
      </>
    );
  }
}

export default OnionHater;
