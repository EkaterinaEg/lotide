const findKey = function(object, callback) {
  for (const key in object) {
    const item = object[key];
    const value = callback(item);
    if (value) {
      return key;
    }
  }
};

const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 4
);

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
};

assertEqual(result, "noma"); //PASS
assertEqual(result, "Ora"); //FAIL
assertEqual(result1, "Blue Hill"); //FAIL
assertEqual(result1, undefined); //PASS
