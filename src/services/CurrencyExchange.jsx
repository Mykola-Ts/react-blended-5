const myHeaders = new Headers();

myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

const requestOptions = {
  method: 'GET',

  redirect: 'follow',

  headers: myHeaders,
};

// fetch('https://api.apilayer.com/exchangerates_data/symbols', requestOptions);

// 'https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount=15';

export const exchangeCurrency = ({ amount, from, to }) => {
  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then(response => response.json())

    .then(result => console.log(result))

    .catch(error => console.log('error', error));
};
