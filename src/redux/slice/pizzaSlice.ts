import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { IPizzaState, ISort } from '../../common/types';
import { getPizzas } from './pizzaAsyncThunk';

const initialState: IPizzaState = {
  data: [],
  activeCategory: 0,
  sort: {
    name: 'Сначала популярные',
    sortProperty: 'rating&order=desc',
  },
  loading: 'loading' /*status: loading --- success --- error*/,
};

export const PizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },

    setSort: (state, action: PayloadAction<ISort>) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getPizzas.pending), (state, action) => {
        state.loading = 'loading';
        console.log(action.meta.requestStatus);
      })
      .addMatcher(isAnyOf(getPizzas.fulfilled), (state, action) => {
        console.log(action.meta.requestStatus);
        state.loading = 'success';
        state.data = action.payload;
      })
      .addMatcher(isAnyOf(getPizzas.rejected), (state, action) => {
        state.loading = 'error';
        console.log(action.payload);
      });
  },
});

export const { setActiveCategory, setSort } = PizzaSlice.actions;
export default PizzaSlice.reducer;
