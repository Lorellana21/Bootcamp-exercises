import React from "react";

/**
 * Este componente recibe la ciudad seleccionada y una función para manejar el evento change.
 * Pinta (Renderiza o renderea) el select con las opciones.
 */

class CitySelector extends React.Component {
    render() {
        return (
            <>
                <label htmlFor="city">Escoja una ciudad: </label>
                <select onChange={this.props.handleChange} name="city" id="city" value={this.props.citySelected}>
                    <option value="BCN">Barcelona</option>
                    <option value="MAD">Madrid</option>
                    <option value="OUR">Ourense</option>
                    <option value="SEV">Sevilla</option>
                </select>
            </>
        );
    }
}

export default CitySelector;