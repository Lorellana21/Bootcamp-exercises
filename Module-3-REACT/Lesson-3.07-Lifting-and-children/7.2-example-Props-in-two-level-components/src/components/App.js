
import Product from './Product';

const App = () => {
  return (
    <div>
      <h1>Tienda de camisetas frikis</h1>
      <ul className="cards">
        <li>
          <Product
            imgSrc="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/react.jpg"
            name="Camiseta React JS"
            description="Camiseta para mujer de cuello ancho"
          />
        </li>
      </ul>
    </div>
  );
};

export default App;
