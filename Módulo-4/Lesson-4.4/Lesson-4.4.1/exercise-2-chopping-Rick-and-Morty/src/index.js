const express = require("express");
const cors = require("cors");
const data = require("../data/data.json");

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// Crea un endpoint para recuperar los datos de un personaje:

app.get("http://localhost:3000/users/1/", (req, res) => {
  console.log("Url params:", req.params);
  //res.json();
});

//Crea otro endpoint para recuperar el listado de episodios de un personaje:
app.get("http://localhost:3000/users/1/episodes", (req, res) => {
  console.log("Url params:", req.params);
  //res.json();
});
