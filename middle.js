const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  console.log(`🟢🟢🟢Assertion Passed: ${arr1} === ${arr2}`);
};

const eqArrays = function(arr1, arr2) {
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

const middle = function(array) {
  let middle = Math.floor(array.length / 2);
  // console.log(middle);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(middle - 1, middle + 1);
  } else {
    return array.slice(middle, middle + 1);
  }
};

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []);

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]);
// console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]);

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]

assertArraysEqual(middle([1, 2, 3]), [1, 2]); // => should FAIL
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
assertArraysEqual(middle([1]), []); // => should PASS
assertArraysEqual(middle([1, 2]), []); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // => should PASS
