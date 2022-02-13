import React from 'react';
import getDataFromApi from '../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      filterText: '',
      filterLanguage: '',
      isLoading: true
    };

    getDataFromApi().then(data => {
      console.log(data);
      this.setState({
        series: data,
        isLoading: false
      });
    });

    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleFilterLanguage = this.handleFilterLanguage.bind(this);
  }

  handleFilterText(ev) {
    this.setState({
      filterText: ev.target.value
    });
  }

  handleFilterLanguage(ev) {
    this.setState({
      filterLanguage: ev.target.value
    });
  }

  renderSeriesList() {
    // si quieres ver este método como si fuera un poema abre AppPoem.js
    return this.state.series
      .filter(serie => {
        return serie.show.name.toLowerCase().includes(this.state.filterText.toLowerCase());
      })
      .filter(serie => {
        return serie.show.language.toLowerCase().includes(this.state.filterLanguage.toLowerCase());
      })
      .map(serie => {
        return <li key={serie.show.id}>Nombre: {serie.show.name}</li>;
      });
  }

  render() {
    return (
      <div>
        <h1>Fetch</h1>
        <p>{this.state.isLoading ? 'Cargando..' : ''}</p>

        <p>
          Explicación: estamos llamando al API por la serie "friends" ya que esta devuelve series en
          English, Japanese, Korean... y así sí podemos filtrar por idioma.
        </p>

        <input type="text" onChange={this.handleFilterText} placeholder="filter by name" />
        <input type="text" onChange={this.handleFilterLanguage} placeholder="filter by language" />

        <ul>{this.renderSeriesList()}</ul>
      </div>
    );
  }
}

export default App;
