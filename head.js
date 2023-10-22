// const assertEqual = require("./assertEqual");

const head = function(arr) {
  if (Array.isArray(arr) && arr.length) {
    return arr[0];
  } else {
    return undefined;
  }
};
module.exports = head;
