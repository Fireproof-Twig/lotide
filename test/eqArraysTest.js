const assertEqual = require("../assertEqual");
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([1, 2], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, "hello"], [1, 2, "hello"]), true); // => should PASS