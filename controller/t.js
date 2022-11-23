const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.upbit.com/v1/ticker?markets=KRW-BTC',
  headers: {accept: 'application/json'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });