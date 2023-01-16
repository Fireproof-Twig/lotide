const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 4], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, "hello"], [1, 2, "hello"]); // => should PASS