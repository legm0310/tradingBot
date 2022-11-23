require('dotenv').config({ path: '../.env' });
// const token = require('../config/token');
const config = require('../config/config');
const server_url = config.server_url;
const combineRequest = require('./order');


//마켓 조회(코인종류)
async function getMarketAll() {
  const url = "https://api.upbit.com/v1/market/all";
  const params = {isDetails: 'false'}
  await combineRequest.request(null, url, params)
}

//분봉
async function getPriceMin(min, count, market) {
  const url = server_url+"/v1/candles/minutes/"+min;
  const params = {market: market || 'KRW-BTC', count: count}
  await combineRequest.request(null, url, params)
}

//일봉
async function getPriceDay(market) {
  const url = server_url+"/v1/candles/days";
  const params = {market: market || 'KRW-BTC', count: '1'} //,convertingPriceUnit : 'KRW'
  await combineRequest.request(null, url, params)
}

//주봉
async function getPriceWeek(market) {
  const url = server_url+"/v1/candles/weeks";
  const params = {market: market || 'KRW-BTC', count: '1'}
  await combineRequest.request(null, url, params)
}

//월봉
async function getPriceMonth(market) {
  const url = server_url+"/v1/candles/months";
  const params = {market: market || 'KRW-BTC', count: '1'}
  await combineRequest.request(null, url, params)
}

//최근 체결 내역
async function getTradesTick(market) {
  const url = server_url+"/v1/trades/ticks";
  const params = {market: market || 'KRW-BTC', count: '1'}
  await combineRequest.request(null, url, params)
}

//현재가 정보
async function getTicker(market) {
  const url = server_url+"/v1/ticker";
  const params = {markets: market || 'KRW-BTC'}
  await combineRequest.request(null, url, params)
}
//호가 정보
async function getOrderbook(market) {
  const url = server_url + "/v1/orderbook";
  const params = {markets: market || 'KRW-BTC'}
  await combineRequest.request(null, url, params)
}

module.exports = {
  getMarketAll,
  getPriceMin,
  getPriceDay,
  getPriceWeek,
  getPriceMonth,
  getTradesTick,
  getTicker,
  getOrderbook
}



// async function request(method, url, params, body, query, token) {
//   const options = {
//     method: method || 'GET',
//     url: url,
//     headers: {
//       accept: 'application/json', 
//       'content-type': 'application/json',
//     }
//   } 
//   if(params) options.params = params
//   // if (url.includes("v1/market/all")) {
//   //   options.params = {isDetails: 'false'}
//   // } 
//   // if (url.includes("v1/candles/minutes")) {
//   //   options.params = {market: 'KRW-BTC', count: '1'}
//   // }
//   if (url.includes("v1/orders/chance")) { options.url = url+query}
//   if (url === 'https://api.upbit.com/v1/orders') {
//     options.data = {
//       market: body.market,
//       side: body.side,
//       volume: body.volume,
//       price: body.price,
//       ord_type: body.ord_type,
//     }
//   }
//   if (token) options.headers.Authorization = `Bearer ${token}`;
//   // console.log(options)
//   await axios
//   .request(options).then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.error(error);

//   });
// }