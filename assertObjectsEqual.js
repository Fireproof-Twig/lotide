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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
      continue;
       
    }
    
    if (value1 !== value2) {
      return false;
    }

  }
      return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let answer = eqObjects(actual, expected) 
    if (answer === true) {
      console.log(`🟩🟩🟩Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    }
    else if (answer === false) {
      console.log(`🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
    }
    
}


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
//  eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);