const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
console.log(results1);
console.log(results2);

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😆😃😃Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😢😢😢Assertion Failed: ${arr1} !== ${arr2} `);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined || arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // => should PASS
assertArraysEqual(results1, [ 'g', 'c', 't', 'm']); // => should FAIL

assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]); // => should PASS
assertArraysEqual(results2, [ 6, 0, 0, 5, 3 ]); // => should FAIL



