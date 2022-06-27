import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { IPizzaState, ISort } from '../../common/types';
import { getPizza } from './getPizzaAsyncThunk';
import { getPizzas } from './pizzaAsyncThunk';

const initialState: IPizzaState = {
  data: [],
  activeCategory: 0,
  sort: {
    name: 'Сначала популярные',
    sortProperty: 'rating',
  },
  loading: 'loading' /*status: loading --- success --- error*/,
  fullPizzaById: null,
  statusFullPizza: 'loading',
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
    clearFullPizza: (state) => {
      state.fullPizzaById = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getPizzas.pending), (state, action) => {
        state.loading = 'loading';
      })
      .addMatcher(isAnyOf(getPizzas.fulfilled), (state, action) => {
        state.loading = 'success';
        state.data = action.payload;
      })
      .addMatcher(isAnyOf(getPizzas.rejected), (state, action) => {
        state.loading = 'error';
      })
      .addMatcher(isAnyOf(getPizza.pending), (state, action) => {
        state.statusFullPizza = 'loading';
      })
      .addMatcher(isAnyOf(getPizza.fulfilled), (state, action) => {
        state.statusFullPizza = 'success';
        state.fullPizzaById = action.payload;
      })
      .addMatcher(isAnyOf(getPizza.rejected), (state, action) => {
        state.statusFullPizza = 'error';
        console.log(action.payload);
      });
  },
});

export const { setActiveCategory, setSort, clearFullPizza } = PizzaSlice.actions;
export default PizzaSlice.reducer;
