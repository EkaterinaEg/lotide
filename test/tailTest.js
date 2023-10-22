const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 2 for the length of array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for the first element of array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns length = 0 for an empty array", () => {
    const result = tail([]);
    assert.strictEqual(result.length, 0);
  });
  it("returns [] for ['Hello']", () => {
    const result = tail(["Hello"]);
    assert.deepEqual(result, []);
  });
});
