'use strict';

const num1 = +prompt('введите число a');
const num2 = +prompt('введите число b');

const getMin = (num1, num2) => {
  let a = num1;
  let b = num2;

  let result = ((a + b) - Math.sqrt((a - b) * (a - b))) / 2;
  return result;
};

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  alert('Было введено не число, попробуйте еще раз');
} else {
  console.log(getMin(num1, num2));
}











