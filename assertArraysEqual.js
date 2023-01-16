const eqArrays = require("./eqArrays")

//make function asserArraysEqual

//take in two arrays as arguments

//log message to console

const assertArraysEqual = function(array1, array2) { 
  let answer = eqArrays(array1, array2);
  if (answer === true){
    console.log(`🟩🟩🟩Assertion Passed: Arrays are equal.`);
  }
  else if (answer === false) {
    console.log(`🔴🔴🔴Assertion Failed: Arrays are not equal.`);
  }
}


module.exports = assertArraysEqual;