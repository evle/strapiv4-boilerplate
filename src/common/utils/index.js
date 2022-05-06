const {
  DEFAULT_FAIL_STATUS,
  DEFAULT_FAIL_MESSAGE,
  DEFAULT_SUCCESS_MESSAGE,
  DEFAULT_SUCCESS_STATUS,
} = require("../constants/response");

const standardizeRespond = (ctx) => {
  if (!ctx.originalUrl.includes("/api/") && ctx.body.message) return;

  // if (!ctx.body.data) {
  //   let tmp = ctx.body;
  //   ctx.body = { data: tmp };
  // }

  ctx.body.status =
    ctx.response.status !== 200 ? DEFAULT_FAIL_STATUS : DEFAULT_SUCCESS_STATUS;
  ctx.body.message =
    ctx.response.status !== 200
      ? DEFAULT_FAIL_MESSAGE
      : DEFAULT_SUCCESS_MESSAGE;
};

const customResConfig = () =>
  [200, 400, 500].reduce((acc, cur) => {
    acc[`handlers.${cur}`] = standardizeRespond;
    return acc;
  }, {});

module.exports = {
  customResConfig,
};
