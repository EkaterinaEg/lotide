const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
};
const tail = function (arr) {
  const tailArray = arr.slice(1);
  return tailArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
const emptyArray = tail([]);
assertEqual(emptyArray.length, 0);
const singleElementArray = tail(["Hello"]);
assertEqual(singleElementArray.length, 0);
const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
