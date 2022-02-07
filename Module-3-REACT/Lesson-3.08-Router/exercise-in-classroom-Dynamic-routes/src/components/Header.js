import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="border--medium">
      <h1>Header: React router con rutas dinámicas</h1>
      <nav>
        Menu:
        <ul className="display-inline-block pl-1">
          <li className="nav__item ">
              Ir al inicio
          </li>
          <li className="nav__item ">
            <Link to="/productos">
              Ir a productos
              </Link>
          </li>
          <li className="nav__item ">
              Quiénes somos
          </li>
          <li className="nav__item ">
              Contacto
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
