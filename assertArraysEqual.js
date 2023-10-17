const assertEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😆😃😃Assertion Passed: both arrays are equal`);
  } else {
    console.log(`😢😢😢Assertion Failed: different arrays `);
  }
};

const eqArrays = function (arr1, arr2) {
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

assertEqual([1, 2, 3], [1, 2]); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
