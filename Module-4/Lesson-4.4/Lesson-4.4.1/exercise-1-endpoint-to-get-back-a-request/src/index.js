const express = require("express");
const cors = require("cors");
//const promos = require("./data.json");

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

// Crea un endpoint de tipo GET que sea capaz de atender la petición http://localhost:3000/users/123/orders/456 y consolear en la terminal los parámetros de la URL.

app.get("http://localhost:3000/users/123/orders/456", (req, res) => {
  console.log("Url params:", req.params);
  //res.json(orders);
});
