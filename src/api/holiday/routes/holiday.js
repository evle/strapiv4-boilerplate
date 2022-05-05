module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/holiday',
     handler: 'holiday.getTotalHour',
     config: {
       auth: false,
       policies: [],
       middlewares: ['api::holiday.dto'],
     },
    },
  ],
};
