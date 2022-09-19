'use strict';

const calculate = (totalPrice, count, promo) => {
  let discountPrice = totalPrice;

  if (count > 10) {
    discountPrice -= discountPrice * 0.03;
  }

  if (totalPrice > 30000) {
    discountPrice -= (totalPrice - 30000) * 0.15;
  }

  if (promo) {
    if (promo === 'METHED') {
      discountPrice -= discountPrice * 0.1;
    }

    if (promo === 'G3H2Z1' && discountPrice > 2000) {
      discountPrice -= 500;
    }
  }

  return discountPrice;
};

console.log(calculate(10000, 11, 'METHED'));
console.log(calculate(60000, 20, 'G3H2Z1'));
console.log(calculate(60000, 20));

