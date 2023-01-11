const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let value of array1) {
    if (array1[value] !== array2[value]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) { 
  let answer = eqArrays(array1, array2);
  if (answer === true){
    console.log(`🟩🟩🟩Assertion Passed: Arrays are equal.`);
  }
  else if (answer === false) {
    console.log(`🔴🔴🔴Assertion Failed: Arrays are not equal.`);
  }
}

//make function called flatten

//take an array as argument including nested arrays
//create empty array

//make for loop to check each element of array is array or not
// if element not array add to empty array
//if element is array go into inner loop

//take each element and add it to empty array

const flatten = function(array) {
  let newArray = [];
  for (let value of array) {
    if (Array.isArray(value) === false) {
      newArray += value;
    }

    else if (Array.isArray(value)) {
      for (let innerValue of value) {
        newArray += innerValue;
      }
    }
  }
  console.log(newArray)
  return newArray;
}

flatten([1, 2, [3, 4, 8, "hello"], 5, [6]]) // => [1, 2, 3, 4, 5, 6]