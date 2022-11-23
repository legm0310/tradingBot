require('dotenv').config({ path: '../.env' })
const config = require('../config/config');
const Upbit = require('../controller/controlBind').Upbit;

const upbit = new Upbit(config.secret_key, config.access_key);
console.log("Prototype method", upbit.__proto__);


// unit test 현황 
// 매매, 리스트, 상세리스트, 주문가능정보, 자산정보 완성

//계좌 조회
// upbit.accountInfo();

//주문계열
// upbit.orderBid(null, 6600, 'price');
// upbit.orderAsk(0.0003, null, 'market');
// upbit.orderList('done', ['8e67eae1-556f-45cd-8c1d-cf6b0e323eae'])
// upbit.orderDetail('8e67eae1-556f-45cd-8c1d-cf6b0e323eae');
// upbit.orderChanceInfo();

//시장가 조회
// upbit.getPriceMin('30', '1',);


async function SMA() {
  let minCandle = await upbit.getPriceMin('30', '3')
  console.log("g",minCandle)
  
}
SMA()
