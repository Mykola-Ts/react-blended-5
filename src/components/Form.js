import { useDispatch } from 'react-redux';
import { setConvertedCurrency } from '../redux/conversionSlice';
import { fetchExchangeCurrency } from '../redux/operations';
import { exchangeCurrency } from 'services/exchangeCurrency';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { value } = form.elements.currency;
    const [amount, from, , to] = value.split(' ');

    try {
      const response = await exchangeCurrency({ amount, from, to });

      if (response && response.result) {
        const result = response.result;
        dispatch(setConvertedCurrency(result));
        dispatch(fetchExchangeCurrency({ amount, from, to }));
      } else {
        console.error(
          'Error during currency exchange: Invalid response format'
        );
      }
    } catch (error) {
      console.error('Error during currency exchange:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="15 USD in UAH" name="currency" />
      <button type="submit">Exchange</button>
    </form>
  );
};
