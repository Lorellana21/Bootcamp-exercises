
import React from "react";

class App extends React.Component {
  render() {
    const users = [
      { name: "Nymphadora Tonks", time: 9 },
      { name: "Cedric Diggory", time: 28 },
      { name: "Cho Chang", time: 35 },
      { name: "Luna Lovegood", time: 45 },
      { name: "Gregory Goyle", time: 56 },
    ];
    const [a, b, c] = users;

    return (
      <>
        <p>El ganador es: {a.name}</p>
        <p>El segundo clasificado es: {b.name}</p>
        <p>El tercero es: {c.name}</p>
      </>
    );
  }
}
export default App;