import Pet from './Pet';
import PropTypes from 'prop-types';

/**
 * Recibe un array de objetos con los datos a representar por las props y
 * hace uso del componente Pet para generar una lista de HTML.
 * 
 * @param {object} props En props.data está el array/arreglo de objetos con los datos de las mascotas (que se importó en App)
 *   --> Fijáos que hace falta poner props como parámetro de la función de este componente
 * @returns JSX con el listado de mascotas
 */

function PetList(props) {
  const htmlData = props.data.map(
    (petData) =>
    <li key={petData.id}>
      <Pet petData={petData}></Pet>
    </li>
    );

  return (
    <ul>
      {htmlData}
    </ul>
  );
}

PetList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PetList;