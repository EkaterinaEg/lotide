const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    const result = middle([1, 2, 3]);
    assert.deepEqual(result, [2]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });
  it("returns [] for [1]", () => {
    const result = middle([1]);
    assert.deepEqual(result, []);
  });
  it("returns [] for [1, 2]", () => {
    const result = middle([1, 2]);
    assert.deepEqual(result, []);
  });
  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    const result = middle([1, 2, 3, 4, 5, 6, 7, 8]);
    assert.deepEqual(result, [4, 5]);
  });
});

// assertArraysEqual(middle([1, 2, 3]), [1, 2]); // => should FAIL
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
// assertArraysEqual(middle([1]), []); // => should PASS
// assertArraysEqual(middle([1, 2]), []); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // => should PASS
