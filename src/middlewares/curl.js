"use strict";

const axios = require("axios");
const https = require("https");

/**
 * `curl` middleware.
 */

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

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.curl = curl
    await next();
  };
};
