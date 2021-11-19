'use strict';

const arr = [];

function getReversed100Numbers() {
    for (let i = 1; i <= 100; i++) {
      arr.push(i);
    }
    arr.reverse();
    console.log(arr);
  }
  
  getReversed100Numbers();