const assertEqual = require('../assertEqual')
const tail = require('../tail');

//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), tail(words)); 
assertEqual(words.length, 3); // original array should still have 3 elements!