"use strict";

/**
 * `respond` middleware.
 */

module.exports = ({ type = "json" }, { strapi }) => {

  return async (ctx, next) => {
    ctx.success = function (data, message = "success", status = 0) {
      ctx.status = 200;
      ctx.type = type;
      ctx.body = {
        status,
        message,
        data,
      };
    };

    ctx.fail = function (detail, message = "fail", status = -1) {
      ctx.status = 200;
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
