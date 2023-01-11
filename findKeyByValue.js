const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} != ${expected}`);
  }
};

//make function findKeyByValue

//take in objectand value args

//make for loop

//scan each value in object and if it matches the value given then return the key.

//if no value found return undefined

const findKeyByValue = function(haystack, needle) {
  for (key in haystack) {
    if (needle === haystack[key]) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);