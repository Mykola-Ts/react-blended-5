import { createSlice } from '@reduxjs/toolkit';

import { fetchExchangeRates } from './operations';

const ratesSlice = createSlice({
  name: 'rates',
  initialState: {
    rates: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchExchangeRates.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchExchangeRates.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.rates = payload;
      })
      .addCase(fetchExchangeRates.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { showRates } = ratesSlice.actions;
export const ratesReducer = ratesSlice.reducer;
