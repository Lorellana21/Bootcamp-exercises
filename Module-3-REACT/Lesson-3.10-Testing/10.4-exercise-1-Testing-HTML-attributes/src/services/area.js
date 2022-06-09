const getSquareArea = (num) => { //recibe un número que indica el lado del cuadrado y retorna su área.

    if (num === undefined) {
        return undefined
    } else {
        return num * num;
    }


}


const getSquareTriangle = (base, height) => (base * height) / 2; 
//recibe un número con la base y otro con la altura del triángulo y retorna su área.



const areas = {
    getSquareArea: getSquareArea,
    getSquareTriangle: getSquareTriangle
}

export default areas;