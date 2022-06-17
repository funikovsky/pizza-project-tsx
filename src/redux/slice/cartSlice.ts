import { createSlice } from '@reduxjs/toolkit';
import { getDataCartLocalS } from '../../utils/getDataCartLS';
import { getTotalPriceFunc } from '../../utils/getTotal';

export interface ItemCart {
  id: number;
  itemPropertyId: string;
  count: number;
  imageUrl: string;
  title: string;
  price: number;
  size: number;
}

interface IDataCart {
  dataCart: Array<ItemCart>;
  totalPizzas: number;
  totalPrice: number;
}

const initialState: IDataCart = {
  dataCart: getDataCartLocalS().data,
  totalPizzas: getDataCartLocalS().totalPizzas,
  totalPrice: getDataCartLocalS().totalPrice,
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const findItem = state.dataCart.find(
        (item) =>
          item.id === action.payload.id && item.itemPropertyId === action.payload.itemPropertyId,
      );
      if (findItem) {
        findItem.count!++;
      } else {
        state.dataCart.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPizzas++;
    },
    sumTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    deleteItemCart: (state, action) => {
      const findItem = state.dataCart.find(
        (item) =>
          item.id === action.payload.id && item.itemPropertyId === action.payload.itemPropertyId,
      );
      if (findItem) {
        findItem.count--;
        state.totalPrice -= action.payload.price;
        state.totalPizzas--;
        if (findItem.count === 0) {
          const findIndex = state.dataCart.findIndex(
            (item) =>
              item.id === action.payload.id &&
              item.itemPropertyId === action.payload.itemPropertyId,
          );
          findIndex !== -1 && state.dataCart.splice(findIndex, 1);
        }
      }
    },
    deleteSelectedItem: (state, action) => {
      const findIndex = state.dataCart.findIndex(
        (item) =>
          item.id === action.payload.id && item.itemPropertyId === action.payload.itemPropertyId,
      );
      findIndex !== -1 && state.dataCart.splice(findIndex, 1);
    },
    getTotalPrice: (state) => {
      state.totalPrice = getTotalPriceFunc(state.dataCart);
    },
    getTotalPizzas: (state) => {
      state.totalPizzas = state.dataCart.reduce((total, item) => {
        total += item.count;
        return total;
      }, 0);
    },

    cartClear: (state) => {
      state.dataCart = [];
      state.totalPizzas = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemToCart,
  sumTotalPrice,
  deleteItemCart,
  deleteSelectedItem,
  getTotalPrice,
  getTotalPizzas,
  cartClear,
} = CartSlice.actions;
export default CartSlice.reducer;
