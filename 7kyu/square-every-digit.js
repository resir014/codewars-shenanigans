// https://www.codewars.com/kata/546e2562b03326a88e000020

/**
 * @param {number} num
 */
function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map(Number)
      .map((digit) => digit ** 2)
      .join(''),
    10,
  );
}

console.log(squareDigits(9119), 811181);
