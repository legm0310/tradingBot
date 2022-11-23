require("dotenv").config({ path: "../.env" });
const config = require('../config/config');
const token = require('../config/token');
const combineRequest = require('./order');

async function accountInfo() {
  const url = config.server_url + '/v1/accounts'
  const Token = token.genToken(this)
  await combineRequest.request(null, url, null, null, Token);
}

module.exports = {
  accountInfo
};