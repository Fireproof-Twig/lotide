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

const assertArraysEqual = function(array1, array2) {
  let answer = eqArrays(array1, array2);
  if (answer === true) {
    console.log(`🟩🟩🟩Assertion Passed: Arrays are equal.`);
  }
  else if (answer === false) {
    console.log(`🔴🔴🔴Assertion Failed: Arrays are not equal.`);
  }
    
};

//write function without

//take two parameters one array and one array of what to take away.

//create new empty array

//create loop

//loop through values ann add to empy array if not equal to unwanted.



const without = function(array, unwanted) {
  let newArray = [];
  for (let value of array) {
    let flag = true;
    for (let value2 of unwanted) {
      if (value === value2) {
        flag = false;
        break;
      }
          
    }
    if (flag === true) {
      newArray.push(value);
    }
  }
  console.log(newArray);
  return newArray;
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
without([1, 56, 34, 23, 23, 23, "hi", "bye"], [23, "hi"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
