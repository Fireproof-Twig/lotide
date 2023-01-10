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

//make function asserArraysEqual

//take in two arrays as arguments

//log message to console

const assertArraysEqual = function(eqArrays) { 
  if (eqArrays === true){
    console.log(`🟩🟩🟩Assertion Passed: Arrays are equal.`);
  }
  else if (eqArrays === false) {
    console.log(`🔴🔴🔴Assertion Failed: Arrays are not equal.`);
  }
}

assertArraysEqual(eqArrays([1, 2], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, "hello"], [1, 2, "hello"]), true); // => should PASS

