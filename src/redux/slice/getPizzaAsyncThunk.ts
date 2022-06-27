import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Ipizza } from '../../common/types';

export const getPizza = createAsyncThunk<Ipizza, string, { rejectValue: string }>(
  'pizza/getPizza',
  async (id, { rejectWithValue }) => {
    const res = await axios
      .get(`https://628f53f70e69410599da6666.mockapi.io/items/${id}`)
      .then((res) => res.data)
      .catch((err: AxiosError) => rejectWithValue(`Ошибка загрузки данных: ${err.message}`));
    return res;
  },
);
