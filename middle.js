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

module.exports = middle;

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []);

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]);
// console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]);

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]
