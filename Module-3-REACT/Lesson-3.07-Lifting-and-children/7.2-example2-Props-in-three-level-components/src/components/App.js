
import ProductList from './ProductList';

const App = () => {
  return (
    <div>
      <h1>Tienda de camisetas frikis</h1>
      <ProductList
        imgSrc="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/react.jpg"
        name="Camiseta React JS"
        description="Camiseta para mujer de cuello ancho"
      />
    </div>
  );
};

export default App;
