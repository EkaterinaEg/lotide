const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(obj1, obj2) {
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

module.exports = assertObjectsEqual;
