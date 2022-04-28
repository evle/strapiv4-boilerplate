"use strict";

/**
 * A set of functions called "actions" for `holiday`
 */

module.exports = {
  getTotalHour: async (ctx, next) => {
    const { country, startdate, enddate } = ctx.request.body;

    if (!country || !startdate || !enddate) {
      return ctx.badRequest("param missing");
    }

    try {
      const hour = await strapi.services["api::holiday.holiday"][
        "getTotalHour"
      ](ctx.request.body);

      ctx.body = {
        data: hour,
        status: 0,
        message: 'success'
      };
    } catch (err) {
      ctx.body = {
        status: -1,
        message: err.message,
        data: null,
      };
    }
  },
};
