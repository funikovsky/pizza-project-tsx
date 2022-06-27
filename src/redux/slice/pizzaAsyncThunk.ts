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
    const sortName = sortProperty.replace('-', '');
    const orderName = sortProperty.includes('-') ? 'asc' : 'desc';

    const res: Array<any> = await axios
      .get(
        `https://628f53f70e69410599da6666.mockapi.io/items?${categoryName}sortBy=${sortName}&order=${orderName}`,
      )
      .then((res) => res.data)
      .catch((error: AxiosError) =>
        rejectWithValue(`Ошибка загрузки данных: ${error.response?.status}`),
      );

    const newRes: Ipizza[] = res.map((obj) => {
      return { ...obj, id: Number(obj.id) };
    });

    return newRes;
  },
);
