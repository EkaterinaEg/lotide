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
  const lowerCaseStr = str.toLowerCase();
  for (let letter of lowerCaseStr) {
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

console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));
