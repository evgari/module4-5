'use strict';

const convertToRub = eur => {
  let dol = eur * 1.2;
  let rub = dol * 73;

  return `${eur} евро = ${rub} рублей`;
};

console.log(convertToRub(100));
console.log(convertToRub(75));

