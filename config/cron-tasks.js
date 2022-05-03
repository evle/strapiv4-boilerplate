/**
 
        *    *    *    *    *    *
        ┬    ┬    ┬    ┬    ┬    ┬
        │    │    │    │    │    |
        │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
        │    │    │    │    └───── month (1 - 12)
        │    │    │    └────────── day of month (1 - 31)
        │    │    └─────────────── hour (0 - 23)
        │    └──────────────────── minute (0 - 59)
        └───────────────────────── second (0 - 59, OPTIONAL)
 
 */

module.exports = {
  exampleJob: {
    task: ({ strapi }) => {
      console.log("cron task");
    },
    options: {
      rule: "* * * * * 1",
      tz: "Asia/Dhaka",
    },
  },
};
