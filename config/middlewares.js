module.exports = [

  // ! override built-in errors for better troubleshotting
  'strapi::errors',
  'global::errors', 

  // TODO: setup origin if PROD
  // {
  //   name:'strapi::cors',
  //   config:{
  //     origin:'http://www.baidu.com'
  //   }
  // },

  // * built-in middlewares 
  'strapi::cors',
  'strapi::security',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

 
  // * App level: loaded from the './src/middlewares' folder
  'global::curl',
  'global::respond',


  // * validate middlewares
  'global::validate',


  // * API level  [API name]/middlewares folder	api::api-name.middleware-name 
  'api::holiday.dto'

];
