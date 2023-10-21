const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require("util").inspect; // <= add this line

  if (!eqObjects(obj1, obj2)) {
    console.log(
      `🔴🔴🔴Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`
    );
    return;
  } else {
    console.log(
      `🟢🟢🟢Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`
    );
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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

assertObjectsEqual(shirtObject, anotherShirtObject); //PASS
assertObjectsEqual(shirtObject, longSleeveMultiColorShirtObject); //FaIL
