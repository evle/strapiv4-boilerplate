module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/test',
     handler: 'test.exampleAction',
     config: {
      auth:false,
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/test',
      handler: 'test.testUA',
      config: {
       auth:false,
        policies: [],
        middlewares: [],
      },
     },
  ],
};
