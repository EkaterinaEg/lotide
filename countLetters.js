// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
};

const countLetters = function(str) {
  const result = {};
  for (let letter of str) {
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  return result;
};
const results = countLetters("LHl");

assertEqual(results["l"], 1); //Passed
assertEqual(results["S"], undefined); //Passed
assertEqual(results["L"], 1); //Passed
assertEqual(results["L"], 2); //Failed
assertEqual(results[" "], undefined); //Passed
