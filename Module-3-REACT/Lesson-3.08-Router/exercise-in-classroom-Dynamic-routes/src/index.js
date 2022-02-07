import App from './components/App';
import {HashRouter} from "react-router-dom"
import React from 'react';  //importar la librería de react
import ReactDOM from 'react-dom'; ; //importar react-dom para que react genere el html

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);