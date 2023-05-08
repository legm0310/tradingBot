require("dotenv").config({ path: "../.env" });
const config = require("../config/config");
const control = require("./index");

class Upbit {
  constructor(s, a) {
    this.secretKey = s;
    this.accessKey = a;
  }
  accountInfo() {
    control.accountCon.accountInfo;
  }
  orderBid() {
    control.orderCon.orderBid;
  }
  orderAsk() {
    control.orderCon.orderAsk;
  }
  orderCancel() {
    control.orderCon.orderCancel;
  }
  orderList() {
    control.orderCon.orderList;
  }
  orderDetail() {
    control.orderCon.orderDetail;
  }
  orderChanceInfo() {
    control.orderCon.orderChanceInfo;
  }
  getMarketAll() {
    control.priceCon.getMarketAll;
  }
  getPriceMin() {
    control.priceCon.getPriceMin;
  }
  getPriceDay() {
    control.priceCon.getPriceDay;
  }
  getPriceWeek() {
    control.priceCon.getPriceWeek;
  }
  getPriceMonth() {
    control.priceCon.getPriceMonth;
  }
  getTradesTick() {
    control.priceCon.getTradesTick;
  }
  getTicker() {
    control.priceCon.getTicker;
  }
  getOrderbook() {
    control.priceCon.getOrderbook;
  }
}

//unit
const upbit = new Upbit(config.secret_key, config.access_key);
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
  Upbit,
};
