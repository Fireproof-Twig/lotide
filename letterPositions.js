const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let counter = 0; counter < sentence.length; counter++) {
    character = sentence[counter];
    if (character === " ") {
      continue;
    }
    if (!results[character]) {
      results[character] = [];
    }
    results[character].push(counter);
  }
    return results;
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

//assertArraysEqual(letterPositions("hello").e, [99]);
console.log(letterPositions("howdy ho i am freddy the great."));