import React from "react";
import "../styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <>
        <label>Escribe algo:</label>
        <input type="text" />
      </>
    );
  }
}
export default App;
