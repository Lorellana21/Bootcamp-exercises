import React from "react";
import "../styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      text: ev.target.value,
    });
    //console.log(ev.target.value);
  }

  render() {
    return (
      <>
        <label>Escribe algo:</label>
        <input type="text" onChange={this.handleChange} />
        <p>Lo que has escrito es: {this.state.text}</p>
      </>
    );
  }
}
export default App;
