const cronTasks = require("./cron-tasks");

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  emitErrors: true,
  cron:{
    enabled: false,
    tasks: cronTasks,
  },
});
