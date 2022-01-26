import PropTypes from 'prop-types';

/**
 * Este componente recibe la ciudad seleccionada y una función para manejar el evento change.
 * Pinta (Renderiza o renderea) el select con las opciones.
 * 
 * @param {object} props En props.citySelected vendrá el valor actual que tiene que tener el SELECT para que sea un componente controlado (lección 3.7).
 *    --> Fijáos que hace falta poner props como parámetro de la función de este componente
 * @returns JSX con el select de ciudades
 */

function CitySelector(props) {
    return (
        <>
            <label htmlFor="city">Escoja una ciudad: </label>
            <select onChange={props.handleChange} name="city" id="city" value={props.citySelected}>
                <option value="BCN">Barcelona</option>
                <option value="MAD">Madrid</option>
                <option value="OUR">Ourense</option>
                <option value="SEV">Sevilla</option>
            </select>
        </>
    );
}

CitySelector.propTypes = {
    handleChange: PropTypes.func.isRequired,
    citySelected: PropTypes.string
}

export default CitySelector;