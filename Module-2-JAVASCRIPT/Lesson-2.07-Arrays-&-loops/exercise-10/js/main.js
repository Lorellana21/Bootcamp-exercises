'use strict';

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron'
    }
  ];

  console.log(items);//Array de 4 elementos
  //El tercer elemento es otro array
  //El cuarto elemento es un objeto

  for (let i = 0; i < items.length; i++){
    console.log(`el dato ${items[i]} está en la posición ${items.indexOf(items[i])} y es de tipo ${items[i].typeof}`);
    
    // console.log(`el dato ${items[i].mother} está en la posición ${items.indexOf(items[i].mother)}`);
    // console.log(`el dato ${items[i].father} está en la posición ${items.indexOf(items[i].father)}`);
  }
  
