"use strict";

/**
 * A set of functions called "actions" for `holiday`
 */

module.exports = {
  getTotalHour: async (ctx, next) => {
    
    try {
      const hour = await strapi.services["api::holiday.holiday"][
        "getTotalHour"
      ](ctx.request.body);

      ctx.success(hour);
    } catch (err) {
      ctx.fail(err.message);
    }
  },
};
