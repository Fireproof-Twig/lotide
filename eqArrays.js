const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} != ${expected}`);
  }
};

// create a function called eqArray

//take two arrays as arguments.

// create a for loop

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

assertEqual(eqArrays([1, 2], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, "hello"], [1, 2, "hello"]), true); // => should PASS

module.export = eqArrays;
