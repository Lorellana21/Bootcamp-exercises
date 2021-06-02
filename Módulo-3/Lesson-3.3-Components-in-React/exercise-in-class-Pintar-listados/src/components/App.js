import React from "react";
import Item from "./Item";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = [
      {
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5,
      },
      {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15,
      },
      {
        name: "Agua mineral",
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5,
      },
    ];

    const filterItems = items.filter((item) => {
      return item.quantity === 2;
    });
    const result = filterItems.map((item) => {
      return (
        <li>
          <Item nombre={item.name} precio={item.price} />
        </li>
      );
    });
    return <ul> {result} </ul>;
  }
}

export default App;
