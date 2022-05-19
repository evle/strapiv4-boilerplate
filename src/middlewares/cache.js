"use strict";

const LRU = require("lru-cache");
const koaCash = require("koa-cash");

/**
 * `cache` middleware.
 */

const cache = new LRU();

module.exports = (config, { strapi }) => {
  return koaCash({
    get: (key) => {
      return cache.get(key);
    },
    set(key, value) {
      return cache.set(key, value);
    },
  });
};
