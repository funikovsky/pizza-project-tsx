import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { CartSlice } from '../slice/cartSlice';
import { PizzaSlice } from '../slice/pizzaSlice';

const rootReducer = combineReducers({
  pizzas: PizzaSlice.reducer,
  cart: CartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
