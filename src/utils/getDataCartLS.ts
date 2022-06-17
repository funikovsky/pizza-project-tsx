import { getTotalItems, getTotalPriceFunc } from './getTotal';

export const getDataCartLocalS = () => {
  const data = localStorage.getItem('cart');

  const dataObj = {
    data: [],
    totalPrice: 0,
    totalPizzas: 0,
  };

  if (data) {
    const totalPrice = getTotalPriceFunc(JSON.parse(data));
    const totalPizzas = getTotalItems(JSON.parse(data));
    const dataObj = {
      data: JSON.parse(data),
      totalPrice,
      totalPizzas,
    };

    return dataObj;
  } else return dataObj;
};
