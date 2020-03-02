'use strict'

function countNumerals(num) {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    let signOfNumber;
    let numeralsCounter;
    if(num < -99 || num > 99) {
      return 'number must be -99 < num < 99';
    }
    if(num === 0) {
      signOfNumber = 'it\'s zero';
    }
    if(num  > 0) {
      signOfNumber = 'positive';
    }
    if(num  < 0) {
      signOfNumber = 'negative';
    }
    for(let i = 0; n > 1; i++) {
      n /= 10;
   }

  }
  return undefined;
}
