import { ItemCart } from '../redux/slice/cartSlice';

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
