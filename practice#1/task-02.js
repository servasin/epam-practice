'use strict'

function countNumerals(num) {
  if (typeof num === 'number' && !Number.isNaN(num)) {
    let signOfNumber;
    let digitAmount;
    if(num < -99 || num > 99) {
      return 'число должно быть больше -100 и меньше 100';
    }
    if(num === 0) {
      signOfNumber = ' это ноль';
      return num + signOfNumber;
    }
    if(num  > 0) {
      signOfNumber = ' положительное';
    }
    if(num  < 0) {
      signOfNumber = ' отрицательное';
    }
    if( (Math.abs(num) / 10) < 10) {
       digitAmount = 'состоит из двух цифр';
    }
    if( (Math.abs(num) / 10) < 1) {
       digitAmount = 'состоит из одной цифры';
    }

    return `число ${num} ${digitAmount}, ${signOfNumber}`;
  }
  return undefined;
}

console.log(countNumerals(1));
console.log(countNumerals(-10));
console.log(countNumerals(99));
console.log(countNumerals(NaN));
console.log(countNumerals(-Infinity));
