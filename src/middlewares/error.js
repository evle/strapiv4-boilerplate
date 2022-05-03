"use strict";

/**
 * `curl` middleware.
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // strapi.app.use(onerror)
    // onerror(ctx.app)

    // console.log(ctx, 'error')
    await next();
  };
};
