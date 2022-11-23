const config = require('./config');
require("dotenv").config();
const { v4: uuidv4 } = require('uuid');
const crypto = require("crypto");
const sign = require("jsonwebtoken").sign;
// const access_key = config.access_key;
// const secret_key = config.secret_key;

const token = function (prop, ...query) {
  console.log(query);
  const payload = {
    access_key: prop.accessKey,
    nonce: uuidv4(),
    query_hash: "",
    query_hash_alg: "SHA512",
  }; 
  
  if (query?.length === 0) {
    delete payload.query_hash;
    delete payload.query_hash_alg;
  } else {
    payload.query_hash = crypto.createHash("sha512").update(query.toString(), "utf-8").digest("hex"); 
  }
  // console.log(payload)
  // console.log(prop.secretKey)
  // console.log(sign(payload, prop.secretKey));
  return sign(payload, prop.secretKey)
  
} 

module.exports = {
  genToken: token
}
