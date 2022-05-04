const {
  DEFAULT_FAIL_STATUS,
  DEFAULT_FAIL_MESSAGE,
  DEFAULT_SUCCESS_MESSAGE,
  DEFAULT_SUCCESS_STATUS,
} = require("../constants/response");

const standardizeRespond = (ctx) => {
  if (!ctx.originalUrl.includes("/api/") && ctx.body.message) return;

  if (ctx.response.status !== 200) {
    ctx.body.status = DEFAULT_FAIL_STATUS;
    ctx.body.message = DEFAULT_FAIL_MESSAGE;
  } else {
    ctx.body.status = DEFAULT_SUCCESS_STATUS;
    ctx.body.message = DEFAULT_SUCCESS_MESSAGE;
  }
};

const customResConfig = () =>
  [200, 400].reduce((acc, cur) => {
    acc[`handlers.${cur}`] = standardizeRespond;
    return acc;
  }, {});

module.exports = {
  customResConfig,
};
