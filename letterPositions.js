const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  console.log(`🟢🟢🟢Assertion Passed: ${arr1} === ${arr2}`);
};

const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined) {
    return false; // If either array is undefined, they are not equal
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
        // console.log(arr);
      } else {
        results[sentence[i]].push(i);
      }
    }
  }

  return results;
};

const results = letterPositions("LHlL");

assertArraysEqual(results["L"], [0, 3]); // => should PASSED
assertArraysEqual(results["L"], [1]); // => should FAILED
assertArraysEqual(results["l"], [2]); // => should PASSED
