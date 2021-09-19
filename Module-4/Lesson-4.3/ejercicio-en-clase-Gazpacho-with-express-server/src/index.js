const express = require("express");
const cors = require("cors");

// Crear servidor

const server = express();

// Configurar servidor

server.use(cors());
server.use(express.json());
server.use(express.static("./web"));

// Arrancar servidor

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//cuando me venga una peticion a index.html, la sirvo desde aqui:
server.get("/index.html", (req, res) => {
  res.send("<html></html>");
});
// ahora hay 2 que estan sirviendo lo mismo, el de arriba de "./web"
// y este ultimo. Se sirve la que esté mas arriba, el de abajo no hace nada.
