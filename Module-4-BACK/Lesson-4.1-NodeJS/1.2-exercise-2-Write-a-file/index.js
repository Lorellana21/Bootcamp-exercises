const fs = require('fs'); //importa el módulo de node

const myObject = {
    user: 'Mari Carmen',
    email: 'mari@gmail.com',
    age: 28,
};

const handleWriteFile = (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Guardado');
    }
};

fs.writeFile('./output.txt', JSON.stringify(myObject), handleWriteFile);





// const handleFile = (err, fileContent) => {
//     if (err !== null) {
//         console.log('Error:', err);
//     } else {
//         console.log('El contenido del fichero es:', fileContent);
//         console.log('La longitud del contenido es:', fileContent.length);
//     }
// };

// fs.readFile('./input.foo', 'utf8', handleFile); // asynchronous
//con esto le decimos a node que lea un fichero, en la codificación indicada, y cuando acabe que ejecute la función "handleWritefile"

