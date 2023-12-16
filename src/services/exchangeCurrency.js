import axios from 'axios';

const apikey = 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj';

export const exchangeCurrency = async ({ amount, from, to }) => {
  const url = `https://api.apilayer.com/exchangerates_data/convert`;

  try {
    const response = await axios.get(url, {
      params: {
        to,
        from,
        amount,
      },
      headers: {
        apikey: apikey,
      },
    });

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    console.error('Error during currency exchange:', error.message);
    throw error;
  }
};
