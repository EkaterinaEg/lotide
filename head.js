// FUNCTION IMPLEMENTATION

const assertEqual = function (head, expected) {
  if (head === expected) {
    console.log(`😆😃😃Assertion Passed: ${head} === ${expected}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${head} !== ${expected}`);
  }
};
const head = function (head) {
  if (head.length) {
    return head[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([]), "Labs");
