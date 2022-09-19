'use strict';

// GCD - greatest common divisor
const findGCD = (num1, num2) => {
  let a = Math.abs(num1);
  let b = Math.abs(num2);

  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

console.log(findGCD(9, 6));
console.log(findGCD(2154, 458));