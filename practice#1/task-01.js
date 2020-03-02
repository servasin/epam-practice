'use strict'

function powNumber(num, pow) {
  if (typeof num === 'number' &&
      typeof pow === 'number' &&
      !Number.isNaN(num) && !Number.isNaN(pow)) {
    return num**pow;
  }
  return undefined;
}

console.log(powNumber(2, 3));
console.log(powNumber(3, 2));
console.log(powNumber(4, 2));
console.log(powNumber(NaN, NaN));
console.log(powNumber('3', '2'));
