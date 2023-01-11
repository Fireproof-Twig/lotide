const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩🟩🟩Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} != ${expected}`);
  }
};

//make function countLetters

//take argument sentence as string

//create an empty object

//create for loop that goes through sentence

//if letter not in object add it and equal 0

//increment letter count by one

const countLetters = function (sentence) {
  const letterCount = {};
  for (character of sentence) {
    if (character === " ") {
      continue;
    }
    if (!letterCount[character]) {
      letterCount[character] = 0;
    }
    letterCount[character] += 1;
  }
  return letterCount;
}

console.log(countLetters("I am a great studier of mathematics."))