/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((acc, value) => acc + value) + arr2.reduce((acc, value) => acc + value);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
