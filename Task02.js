'use strict';

const formatStr = (str) => {
  if (!str) return 'пустая строка';

  let newStr = str;

  newStr = newStr.toLowerCase();
  // return newStr[0].toUpperCase() + newStr.slice(1);
  return `${newStr[0].toUpperCase()}${newStr.slice(1)}`;
};

console.log(formatStr('пРИВЕТ мИр!'));
console.log(formatStr(''));
console.log(formatStr('qWERTY'));

