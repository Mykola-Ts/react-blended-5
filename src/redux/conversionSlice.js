import { fetchExchangeCurrency } from './operations';

import { createSlice } from '@reduxjs/toolkit';

const conversionSlice = createSlice({
  name: 'conversion',
  initialState: {
    convertedCurrency: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setConvertedCurrency(state, { payload }) {
      state.convertedCurrency = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.convertedCurrency = payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setConvertedCurrency } = conversionSlice.actions;
export const conversionReducer = conversionSlice.reducer;
