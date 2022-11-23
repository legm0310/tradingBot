require('dotenv').config({ path: '../.env' })
const config = require('../config/config');
const control = require('./index');

function Upbit(s, a) {
  this.secretKey = s
  this.accessKey = a
}

Upbit.prototype.accountInfo = control.accountCon.accountInfo
Upbit.prototype.orderBid = control.orderCon.orderBid
Upbit.prototype.orderAsk = control.orderCon.orderAsk
Upbit.prototype.orderCancel = control.orderCon.orderCancel
Upbit.prototype.orderList = control.orderCon.orderList
Upbit.prototype.orderDetail = control.orderCon.orderDetail
Upbit.prototype.orderChanceInfo = control.orderCon.orderChanceInfo
Upbit.prototype.getMarketAll = control.priceCon.getMarketAll
Upbit.prototype.getPriceMin = control.priceCon.getPriceMin
Upbit.prototype.getPriceDay = control.priceCon.getPriceDay
Upbit.prototype.getPriceWeek = control.priceCon.getPriceWeek
Upbit.prototype.getPriceMonth = control.priceCon.getPriceMonth
Upbit.prototype.getTradesTick = control.priceCon.getTradesTick
Upbit.prototype.getTicker = control.priceCon.getTicker
Upbit.prototype.getOrderbook = control.priceCon.getOrderbook

//unit
const upbit = new Upbit(config.secret_key, config.access_key)
// upbit.accountInfo();
// upbit.orderChanceInfo();
// upbit.orderAsk();
// upbit.getMarketAll();
// upbit.getPriceMin(30);
// upbit.getPriceDay();
// upbit.getPriceWeek();
// upbit.getPriceMonth();
// upbit.getTradesTick();
// upbit.getTicker();
// upbit.getOrderbook();


module.exports = {
  Upbit
}

 

