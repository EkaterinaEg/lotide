// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
};

module.exports = assertEqual;
