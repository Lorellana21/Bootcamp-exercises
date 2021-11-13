//Version 2. Decido escuchar solo a lis "li"
//Aqui cojo todos los "li"

const itemElements = document.querySelectorAll(".js-item");
console.log(itemElements);

function handleItem(event){
  console.log("El current target siempre va a ser el li", event.currentTarget);
}

//Le pongo un addEventListener a cada uno de los "li"
for (const item of itemElements){
  item.addEventListener("click", handleItem)
}
