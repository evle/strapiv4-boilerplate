'use strict';

/**
 * `dto` middleware.
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    await ctx.validate({
      country:'required',
      startdate: 'required',
      enddate: 'required'
    })

    await next();
  };
};
