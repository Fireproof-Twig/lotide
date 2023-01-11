const assertArraysEqual = function(array1, array2) { 
  let answer = eqArrays(array1, array2);
  if (answer === true){
    console.log(`🟩🟩🟩Assertion Passed: Arrays are equal.`);
  }
  else if (answer === false) {
    console.log(`🔴🔴🔴Assertion Failed: Arrays are not equal.`);
  }
}

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

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
