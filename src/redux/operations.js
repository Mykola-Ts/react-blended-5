import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'services/getUserInfo';

export const fetchCurrency = createAsyncThunk(
  'currency/baseCurrency',
  async (coords, thunkAPI) => {
    try {
      const { results } = await getUserInfo(coords);
      //   console.log(results[0].annotations.currency.iso_code);
      return results[0].annotations.currency.iso_code;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
