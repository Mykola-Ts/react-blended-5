import axios from 'axios';

export const getRates = async base => {
  const symbols = 'USD, EUR, PLN, GBP, CHF, JPY';
  const apikey = 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj';
  const url = `https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`;
  const { data } = await axios.get(url, {
    headers: {
      apikey: apikey,
    },
  });
  return data;
};
