const {
  DEFAULT_FAIL_STATUS,
  DEFAULT_FAIL_MESSAGE,
  DEFAULT_SUCCESS_MESSAGE,
  DEFAULT_SUCCESS_STATUS,
} = require("../constants/response");

const standardizeRespond = (ctx) => {
  if (!ctx.originalUrl.includes("/api/") && ctx.body.message) return;
    console.log(ctx.response.status)
  if (ctx.response.status !== 200) {
    ctx.body.status = DEFAULT_FAIL_STATUS;
    ctx.body.message = DEFAULT_FAIL_MESSAGE;
  } else {
    ctx.body.status = DEFAULT_SUCCESS_STATUS;
    ctx.body.message = DEFAULT_SUCCESS_MESSAGE;
  }
};

const customResConfig = () => {
  const resCode = [200, 400];

  return resCode.reduce((acc, cur) => {
    return (acc[`handlers.${cur}`] = standardizeRespond);
  }, {});
};
module.exports = {
  customResConfig,
};
