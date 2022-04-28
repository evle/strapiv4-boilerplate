"use strict";

module.exports = {
  login: async (ctx) => {
    if(!ctx.request.body.ticket){
      return ctx.badRequest("ticket missing");
    }

    try {
      const user = await strapi.services["api::login.login"]["getUserinfo"](
        ctx.request.body.ticket
      );

      ctx.body = user ? { data: user } : { data: null };
    } catch (err) {
      strapi.log.error(err);

      ctx.body = {
        data: null,
      };
    }
  },
};
