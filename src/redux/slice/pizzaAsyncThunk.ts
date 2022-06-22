import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Ipizza } from '../../common/types';

interface SortAction {
  category: number;
  sortProperty: string;
}

//  -------------------------------------возвращаем--принимаем---ошибка---
export const getPizzas = createAsyncThunk<Array<Ipizza>, SortAction, { rejectValue: string }>(
  'pizzas/getPizzas',
  async ({ category, sortProperty }, { rejectWithValue }) => {
    const categoryName = category ? `category=${category}&` : '';

    const res = await axios
      .get(
        `https://628f53f70e69410599da6666.mockapi.io/items?${categoryName}sortBy=${sortProperty}`,
      )
      .then((res) => res.data)
      .catch((error: AxiosError) =>
        rejectWithValue(`Ошибка загрузки данных: ${error.response?.status}`),
      );

    return res;
  },
);
