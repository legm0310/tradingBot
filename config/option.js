require('dotenv').config({ path: '../.env' });
const server_url = require('./config').server_url;
const token = require('./token');


let Option = function (method, path, prop, query, body) {
  return {
    method: method , //'GET'
    url: server_url+path+query,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${token.genToken(prop ,query)}`
    },
    // data: {
    //   market: body.market,
    //   side: body.side,
    //   volume: body.volume,
    //   price: body.price,
    //   ord_type: body.ord_type,
    // }

  }
}

let AccountOption = function(prop) {
  return {
    method: 'GET',
    url: `${server_url}/v1/accounts`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token.genToken(prop)}`
    },
    

  }
}
module.exports = {
  Option,
  AccountOption
}

