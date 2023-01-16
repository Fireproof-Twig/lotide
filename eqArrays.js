const assertEqual = require('./assertEqual');


// create a function called eqArray

//take two arrays as arguments.

// create a for loop
// const assertEqual = require('assertEqual');


//compare each element of array to the other array

//if elements differ return false

//else return true

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index in array1) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
