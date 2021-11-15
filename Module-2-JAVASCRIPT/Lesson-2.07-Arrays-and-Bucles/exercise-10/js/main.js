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

  console.log(items);

  for (let i = 0; i < items.length; i++){
    console.log(`el dato ${items[i]} está en la posición ${items.indexOf(items[i])} y es de tipo ${items[i].typeof}.`);
    // console.log(`El dato ${items[i]} está en la posición ${i} y es de tipo ${items[i].typeof}.`);
  }

  



