// Crear un componente OnionHater con un textarea.
//Escucharemos los evento de cambio del valor del textarea
//de forma que, si el texto escrito contiene la palabra
//'cebolla' hagamos un alert() diciendo 'ODIO LA CEBOLLA'.
// PISTA: para acceder al valor del textarea lo podemos
//hacer desde el objeto evento, el parámetro de la función escuchadora, con ev.target.value
// PISTA: para comprobar si una cadena contiene un texto podemos usar el método includes de las cadenas

import React from "react";

class OnionHater extends React.Component {
  render() {
    const onClickListener = (ev) => {
      if (ev.target.value === "cebolla") {
        alert("ODIO LA CEBOLLA");
      }
    };

    return <textarea onChange={onClickListener}></textarea>;
  }
}

export default OnionHater;
