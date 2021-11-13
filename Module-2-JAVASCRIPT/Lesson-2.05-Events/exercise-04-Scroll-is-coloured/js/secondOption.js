const bodyElement = document.querySelector (".js-body")

function handleBodyScroll(){
    console.log("scrolleando...", window.scrollY);
    const currentScroll = window.scrollY;
    bodyElement.classList.remove("red", "aqua");//Hay que borrar la clase anterior puesto que no pueden convivir las dos clases juntas. 
    //Con este remove en todo momento le quito las dos, y luego le voy a añadiendo la que le toque.
    if(currentScroll > 250){
        bodyElement.classList.add("red");
    } else {
        bodyElement.classList.add("aqua");
    }
}
window.addEventListener("scroll", handleBodyScroll);

//No le pongo "toggle" porque no quiero que vaya cambiando todo el rato, solo cuando llegue a 250px.