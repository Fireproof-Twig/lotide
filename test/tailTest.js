const tail = require('../tail');
const assertEqual = require('../assertEqual')

//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), tail(words)); 
assertEqual(words.length, 3); // original array should still have 3 elements!