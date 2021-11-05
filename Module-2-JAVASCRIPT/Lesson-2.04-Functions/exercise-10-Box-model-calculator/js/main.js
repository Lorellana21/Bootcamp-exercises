'use strict';


function calculate (borderBox, width, padding, borderSize){

  //Si es borderBox = ancho - padding - borderSize
  if(borderBox === true){
    const totalWidth = width - padding -borderSize;
    console.log(`El ancho del contenido es: ${totalWidth}px y el ancho total de la caja es: ${width}px.`);
  
  // No es borderBox = ancho + padding + bordeSize

  } else {
    const totalWidth = width + padding + borderSize;
    console.log(`El ancho del contenido es: ${width}px y el ancho total de la caja es: ${totalWidth}px.`);
  }
}

  calculate(true, 100, 10, 3);
  calculate(false, 100, 10, 3);