`use strict`;

const groups = [
  {
    id: "asfd234",
    isFav: false,
    name: "Pegatina",
  },
  {
    id: "sfñasldfkasdf",
    isFav: true,
    name: "Pegatina",
  },
  {
    id: "9234nd",
    isFav: false,
    name: "Camela",
  },
  {
    id: "234rfdsf",
    isFav: true,
    name: "AC-CD",
  },
  {
    id: "234rxxy",
    isFav: true,
    name: "Power-Girl",
  },
];
const ulElement = document.querySelector(".js-list");

/*Crear un "li":
const liElement = document.createElement("li");
const textElement = document.createTextNode("dayana");
liElement.appendChild(textElement);
ulElement.appendChild(liElement);
*/

//Función tipo Arrow para crear muchos "li":
const paintElements = () => {
  for (const group of groups) {
    //bucle
    const liElement = document.createElement("li"); //crear li
    ulElement.appendChild(liElement); //añadir a su padre
    const textElement = document.createTextNode(group.name); //crear texto
    liElement.appendChild(textElement); //añadir ese texto a li (su padre en este caso)

    //ahora hay que hacer un if dentro del for
    // if(group.isFav === true) = es lo mismo que lo que pone a continuación, porque por defecto pregunta si la condicion es true
    if (group.isFav) {
      liElement.classList.add("red");
    } else {
      liElement.classList.add("blue");
    }
  }
};
paintElements();
