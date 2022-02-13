

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
    const [obj1, obj2, obj3] = users;

    return (
      <>
        <p>
          El ganador es: {obj1.name} y el tiempo conseguido es: {obj1.time}
        </p>
        <p>
          El segundo clasificado es: {obj2.name} y el tiempo conseguido es:{" "}
          {obj2.time}
        </p>
        <p>
          El tercer clasificado es: {obj3.name} y el tiempo conseguido es:{" "}
          {obj3.time}
        </p>
      </>
    );
  }
}
export default App;