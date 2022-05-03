module.exports = [
  // built-in middlewares


  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  // {
  //   name:'strapi::cors',
  //   config:{
  //     origin:'http://www.baidu.com'
  //   }
  // },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

  // App level: loaded from the './src/middlewares' folder 
  'global::curl',
  'global::respond',
  'global::error',
  'global::validate',



  // API level  [API name]/middlewares folder	api::api-name.middleware-name 
  'api::holiday.dto'

];
