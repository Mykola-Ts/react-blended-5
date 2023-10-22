import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '' },
  reducers: {
    setBaseCurrency(state, action) {},
  },
  extraReducers: builder => {
    builder.addCase(fetchCurrency.fulfilled, (state, { payload }) => {
      state.baseCurrency = payload;
    });
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
