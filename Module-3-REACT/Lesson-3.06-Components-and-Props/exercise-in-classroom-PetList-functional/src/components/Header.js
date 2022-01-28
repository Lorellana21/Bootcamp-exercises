import PropTypes from 'prop-types';

/**
 * Genera el código HTML de la cabecera
 * 
 * @param {str} props --> Fijáos que hace falta poner props como parámetro de la función de este componente
 *   porque usamos props (como es un comp. funcional, no se pone this.props, sino props)
 * @returns JSX con el resultado
 */

function Header(props) {
  return (
    <>
      <h1>Ejercicio de listados</h1>
      <h2>{props.text}</h2>
    </>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;