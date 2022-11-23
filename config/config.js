require('dotenv').config();
module.exports = {
  access_key : process.env.UPBIT_OPEN_API_ACCESS_KEY,
  secret_key : process.env.UPBIT_OPEN_API_SECRET_KEY,
  server_url : process.env.UPBIT_OPEN_API_SERVER_URL,
}