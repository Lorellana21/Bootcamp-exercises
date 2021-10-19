import React from "react";

class ItemList extends React.Component {
  render() {
    return (
      <li className="name">
        {this.props.children}
      </li>
    );
  }
}

export default ItemList;
