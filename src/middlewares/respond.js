"use strict";

const {
  DEFAULT_FAIL_MESSAGE,
  DEFAULT_FAIL_STATUS,
  DEFAULT_SUCCESS_MESSAGE,
  DEFAULT_SUCCESS_STATUS,
} = require("../common/constants/response");

/**
 * `respond` middleware.
 */

module.exports = ({ type = "json", code = 200 }, { strapi }) => {
  return async (ctx, next) => {
    ctx.success = function (
      data,
      message = DEFAULT_SUCCESS_MESSAGE,
      status = DEFAULT_SUCCESS_STATUS
    ) {
      ctx.status = code;
      ctx.type = type;
      ctx.body = {
        status,
        message,
        data,
      };
    };

    ctx.fail = function (
      detail,
      message = DEFAULT_FAIL_MESSAGE,
      status = DEFAULT_FAIL_STATUS
    ) {
      ctx.status = code;
      ctx.type = type;
      ctx.body = {
        status,
        message,
        data: null,
        detail, // for backend debug
      };
    };

    await next();
  };
};
