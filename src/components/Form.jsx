import { exchangeCurrency } from 'services/CurrencyExchange';

export const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const { value } = form.elements.currency;
    console.log('handleSubmit  value:', value);
    const [amount, from, , to] = value.split(' ');

    exchangeCurrency({ amount, from, to });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="15 USD in UAH" name="currency" />
      <button type="submit">Exchange</button>
    </form>
  );
};
