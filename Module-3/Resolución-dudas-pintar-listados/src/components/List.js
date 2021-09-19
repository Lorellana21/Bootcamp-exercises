import React from "react";

class List extends React.Component {
  render() {
    //aqui los recibe por props
    const htmlData = this.props.data.map((movie) => (
      <ul>
        <li key={movie.id}>
          <article>
            <div className="name">{movie.show.name}</div>
            <div className="name">{movie.show.id}</div>
            <div className="name">{movie.show.language}</div>
            <div className="name">{movie.show.type}</div>
          </article>
        </li>
      </ul>
    ));
    console.log(htmlData);
    return (
      <>
        <h2>Soy la lista</h2>
        {htmlData}
      </>
    );
  }
}

export default List;
