"use strict";

const namePer = "dayana";
const age = 33;

const person = {
  name: "dayana",
  age: 33,
  address: {
    city: "madrid"
  },
}
console.log(person.name);
console.log(person["age"]);
console.log(person.address.city);
console.log(person['address'].city);

const car = {};
car.color = "blue";
car.year = 2021;

const proCar = "color";
console.log(car);
console.log(car[proCar]);
console.log(car["color"]);

function productStock() {
  console.log("el stock es bajo");
}

const product = {
  nameProduct: "cafetera",
  price: 1500,
  /* stock: () => {
     console.log("el stock es bajo");
   }*/
  stock: productStock,
  paint: function () {
    console.log(`El producto es ${this.nameProduct} y el precio ${this.price}`)
  }
}
product.stock();
product.paint();