import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency } from 'services/exchangeCurrency';
import { getRates } from 'services/getRates';
import { getUserInfo } from 'services/getUserInfo';

export const fetchCurrency = createAsyncThunk(
  'currency/baseCurrency',
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedBaseCurrency = state.baseCurrency;

    if (persistedBaseCurrency) {
      return thunkAPI.rejectWithValue('Already have base currency');
    }
    try {
      const { results } = await getUserInfo(coords);
      //   console.log(results[0].annotations.currency.iso_code);
      return results[0].annotations.currency.iso_code;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchExchangeCurrency = createAsyncThunk(
  'conversion/exchangeCurrency',
  async ({ amount, from, to }, thunkAPI) => {
    try {
      const { result } = await exchangeCurrency({ amount, from, to });
      return result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchExchangeRates = createAsyncThunk(
  'rates/fetchExchangeRates',
  async (baseCurrency, thunkAPI) => {
    try {
      const { rates } = await getRates(baseCurrency);
      console.log(rates);
      return rates;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
