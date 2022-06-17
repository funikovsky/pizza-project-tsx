import { ItemCart } from '../common/types';

export const getTotalPriceFunc = (arr: Array<ItemCart>) => {
  return arr.reduce((total, item) => {
    total += item.price * item.count;

    return total;
  }, 0);
};

export const getTotalItems = (arr: Array<ItemCart>) => {
  return arr.reduce((total, item) => {
    total += item.count;
    return total;
  }, 0);
};
