import { createSlice } from '@reduxjs/toolkit';

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
  dataCart: [],
  totalPizzas: 0,
  totalPrice: 0,
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
      }
    },
  },
});

export const { addItemToCart, sumTotalPrice, deleteItemCart } = CartSlice.actions;
export default CartSlice.reducer;
