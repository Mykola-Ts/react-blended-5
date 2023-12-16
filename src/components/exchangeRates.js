import { useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  selectRates,
  selectRatesError,
  selectRatesLoading,
} from '../redux/selectors';
import { Loader } from './Loader';

export const ExchangeRates = () => {
  const rates = useSelector(selectRates);
  const baseCurrency = useSelector(selectBaseCurrency);
  const ratesLoading = useSelector(selectRatesLoading);
  const ratesError = useSelector(selectRatesError);

  return (
    <div>
      <h1>Exchange Rates</h1>
      {ratesLoading && <Loader />}
      {ratesError && <p>Error: {ratesError}</p>}
      <div>
        {Object.entries(rates).map(([currency, rate]) => (
          <div key={currency}>
            <p>{`${1} ${baseCurrency} =  ${rate} ${currency}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
