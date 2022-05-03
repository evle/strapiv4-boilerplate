"use strict";

module.exports = {
  login: async (ctx) => {
    if(!ctx.request.body.ticket){
      return ctx.badRequest("ticket missing");
    }

    console.log(ctx.errors, 'TT')

    try {
      const user = await strapi.services["api::login.login"]["getUserinfo"](
        ctx.request.body.ticket
      );

      ctx.body = user ? { data: user } : { data: null };
    } catch (err) {
      strapi.log.error(err.message, 'msg', ctx.error);

      

      ctx.body = {
        data: err.message,
      };
    }
  },
};
