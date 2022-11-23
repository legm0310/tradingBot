require("dotenv").config({ path: "../.env" });
const config = require('../config/config');
const axios = require('axios');
const server_url = config.server_url;
const queryEncode = require("querystring").encode;
const token = require('../config/token');


async function request(method, url, params, body, token) {
  const options = {
    method: method || 'GET',
    url: url,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    }
  };
  if(params) options.params = params
  if (url === 'https://api.upbit.com/v1/orders'&&method ==='POST') {
    options.data = {
      market: body.market,
      side: body.side,
      volume: body.volume,
      price: body.price,
      ord_type: body.ord_type,
    };
  }
  if (token) options.headers.Authorization = `Bearer ${token}`;
  await axios
    .request(options).then(function (response) {
      if (options.url.includes('orderbook')) console.log(response.data[0].orderbook_units)
      else {
        console.log(response.data);
        return response.data;
      }  
  })
  .catch(function (error) {
    console.log(error);
  });
}
  // if (url.includes("v1/market/all")) {
  //   options.params = {isDetails: 'false'}
  // }
  // if (url.includes("v1/candles/minutes")) {
  //   options.params = {market: 'KRW-BTC', count: '1'}
  // }
  // if (url.includes("v1/orders/chance")) { options.url = url+query}
  

//매수
async function orderBid(volume, price, priceType, market,) {
  const body = {   //all property is string
    market: market || 'KRW-BTC',
    side: 'bid',
    volume: volume || null,
    price: price,
    ord_type: priceType || 'price',
  };
  const query = queryEncode(body);
  const url = server_url + "/v1/orders?"+query;
  const Token = token.genToken(this, query);
  await request("POST", url, null, body, Token)
}

//매도
async function orderAsk(volume, price, priceType, market,) {
  const body = {   //all property is string
    market: market || 'KRW-BTC',
    side: 'ask',
    volume: volume,
    price: price || null,
    ord_type: priceType || 'market',
  };
  const query = queryEncode(body);
  const url = server_url + "/v1/orders?" + query;
  const Token = token.genToken(this, query);
  await request("POST", url, null, body, Token)
}

//주문 취소
async function orderCancel(uuid) {
  const body = {
    uuid: uuid
  }; //identifier
  const query = queryEncode(body);
  const url = server_url + 'v1/order?'+ query;
  const Token = token.genToken(this, query);
  await request("DELETE", url, null, null, Token)
}

//주문 리스트 - 미완(Unauthorized 401 --> TODO 쿼리문 이상 검토)
async function orderList(state, uuids, page, limit, market) {
  const non_array_body = {
    market: market || "KRW-BTC",
    state: state,
    page: page || 1,
    limit: limit||100,
    order_by: 'desc' //default desc
  }
  const array_body = {
    uuids: uuids,
    // states: state
  }
  const uuidQuery = uuids.map(uuid => `uuids[]=${uuid}`).join('&');
  const query = queryEncode(non_array_body) + '&' + uuidQuery;
  const url = server_url + "/v1/orders?" + query;
  const Token = token.genToken(this)
  await request(null, url, null, null, Token)
}

//개별 주문 상세
async function orderDetail(uuid) {
  const body = {
    uuid: uuid
  };
  const query = queryEncode(body);
  const url = server_url + '/v1/order?'+ query;
  const Token = token.genToken(this, query);
  await request(null, url, null, null, Token)
}

//주문 가능 정보
async function orderChanceInfo(market) {
  const body = {
    market: market|| "KRW-BTC",
  }
  const query = queryEncode(body);
  const url = server_url + "/v1/orders/chance?" + query;
  const Token = token.genToken(this, query)
  await request(null, url, null, null, Token)
}


module.exports = {
  request,
  orderBid,
  orderAsk,
  orderCancel,
  orderList,
  orderDetail,
  orderChanceInfo,
}
