const assert = require('chai').assert;
const tail = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns length still equal to 3", () => {
    assert.deepEqual((words).length, 3)
  })
})

