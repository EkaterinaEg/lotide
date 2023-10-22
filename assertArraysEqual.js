const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  console.log(`🟢🟢🟢Assertion Passed: ${arr1} === ${arr2}`);
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

assertArraysEqual([1, 2, 3], [1, 2]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
