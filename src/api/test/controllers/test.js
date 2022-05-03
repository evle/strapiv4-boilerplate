'use strict';

/**
 * A set of functions called "actions" for `test`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    strapi.log.info(ctx)
    try {
      strapi.log.info('Logs work!');
      // a.b = 5  // 程序出错
      ctx.body = 'ok';
    } catch (err) {
      ctx.throw(508, '服务器开小差了')
    }
  },
  testUA: async(ctx, next)=>{
    // strapi.log.info(ctx)
    try {
      strapi.log.info('Logs work!');
      // a.b = 5  // 程序出错
      ctx.body = 'ok';
    } catch (err) {
      ctx.throw(508, '服务器开小差了')
    }
  }
};
