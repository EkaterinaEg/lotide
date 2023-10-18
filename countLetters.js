// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😆😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const result = {};

  for (let letter of str) {
    if (letter !== " ") {
      if (result[letter] === undefined) {
        result[letter] = 1;
      } else {
        result[letter]++;
      }
    }
  }
  return result;
};
const results = countLetters("LHl");

assertEqual(results["l"], 1); //Passed
assertEqual(results["S"], undefined); //Passed
assertEqual(results["L"], 1); //Passed
assertEqual(results["L"], 2); //Failed
assertEqual(results[" "], undefined); //Passed
