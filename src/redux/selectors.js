export const selectBaseCurrency = state => state.currency.baseCurrency;

export const selectConvertedCurrency = state => {
  const rawValue = state.conversion.convertedCurrency;
  if (typeof rawValue === 'number') {
    return rawValue.toFixed(2);
  }
  return rawValue;
};
export const selectConversionError = state => state.conversion.error;
export const selectConversionLoading = state => state.conversion.isLoading;

export const selectRates = state => state.rates.rates;
export const selectRatesError = state => state.rates.error;
export const selectRatesLoading = state => state.rates.isLoading;
