const axios = require("axios");
const https = require("https");

const curl = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

curl.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

module.exports = curl;
