const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


//create middle function takes array as argument

//create empty array

//if array length two or less return empty array

//if odd number array return single element

//if even number return two elements

const middle = function (array) {
  let newArray = [];
  if (array.length <= 2) {
    console.log(newArray);
    return newArray;
  }
  else if (array.length % 2 !== 0) {
    newArray.push(array[array.length / 2 - 0.5]);
    console.log(newArray);
    return newArray;
  }

  else if (array.length % 2 === 0) {
    newArray.push(array[array.length / 2 - 1]);
    newArray.push(array[array.length / 2]);
    console.log(newArray);
    return newArray;
  }
 
}


module.exports = middle;
