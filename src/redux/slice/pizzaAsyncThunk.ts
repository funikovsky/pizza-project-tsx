import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Ipizza } from '../../common/types';

//  -------------------------------------возвращаем--принимаем---ошибка---
export const getPizzas = createAsyncThunk<Array<Ipizza>, void, { rejectValue: string }>(
  'pizzas/getPizzas',
  async (_, { rejectWithValue }) => {
    const res = await axios
      .get(`https://628f53f70e69410599da6666.mockapi.io/items`)
      .then((res) => res.data)
      .catch((error: AxiosError) =>
        rejectWithValue(`Ошибка загрузки данных: ${error.response?.status}`),
      );

    return res;
  },
);
