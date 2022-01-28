import PropTypes from 'prop-types';

/**
 * Recibe los datos de una mascota en una propiedad de las props y
 * genera el código HTML para representar una mascota.
 * 
 * @param {object} props En props.pepData está el objeto con los datos de UNA mascota a representar con HTML.
 * @returns JSX con los datos de UNA mascota
 */

function Pet(props) {
  return (
    <article>
      <div className="name">{props.petData.name}</div>
      <div className="kind">{props.petData.kind}</div>
    </article>
  );
}

Pet.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Pet;