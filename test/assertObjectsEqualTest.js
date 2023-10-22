const assertObjectsEqual = require("../assertObjectsEqual");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

assertObjectsEqual(shirtObject, anotherShirtObject); //PASS
assertObjectsEqual(shirtObject, longSleeveMultiColorShirtObject); //FaIL
