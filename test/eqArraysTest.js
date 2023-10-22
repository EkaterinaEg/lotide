const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([], []), true); // both arrays are empty
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // arrays have different lengths
assertEqual(eqArrays(["test", "123"], ["test", "123"]), true); // arrays with string elements
