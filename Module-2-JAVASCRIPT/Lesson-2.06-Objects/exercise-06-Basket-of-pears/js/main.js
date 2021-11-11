'use strict';

const basket = {
maxPears : 24,
minPears : 4,
currentPears : 10,
initPears : 5,
}

// Añadir al cesto una pera
basket.addPear = function (){
    return (this.currentPears = this.currentPears + 1);
}
console.log(basket.addPear());

// Sacar del cesto una pera
basket.removePear = function(){
    return (this.currentPears = this.currentPears - 1);
}
console.log(basket.removePear());

// Restablecer el número de peras al valor inicial
basket.setPears = function(){
    return (this.currentPears = this.initPears);
}
console.log(basket.setPears());
