// FUNCTION IMPLEMENTATION

const assertEqual = function(head, expected) {
  if (head === expected) {
    console.log(`😆😃😃Assertion Passed: ${head} === ${expected}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${head} !== ${expected}`);
  }
};
const head = function(arr) {
  if (Array.isArray(arr) && arr.length) {
    return arr[0];
  } else {
    return undefined;
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
