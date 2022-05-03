'use strict';

const { HttpError, ApplicationError } = require('@strapi/utils').errors;
const createError = require('http-errors');
const {
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  PayloadTooLargeError,
} = require('@strapi/utils').errors;


const mapErrorsAndStatus = [
  {
    classError: UnauthorizedError,
    status: 401,
  },
  {
    classError: ForbiddenError,
    status: 403,
  },
  {
    classError: NotFoundError,
    status: 404,
  },
  {
    classError: PayloadTooLargeError,
    status: 413,
  },
];

const formatApplicationError = error => {
  const errorAndStatus = mapErrorsAndStatus.find(pair => error instanceof pair.classError);
  const status = errorAndStatus ? errorAndStatus.status : 400;

  return {
    status,
    body: {
      data: null,
      error: {
        status,
        name: error.name,
        message: error.message,
        details: error.details || error.stack,
      },
    },
  };
};

const formatHttpError = error => {
  return {
    status: error.status,
    body: {
      data: null,
      error: {
        status: error.status,
        name: error.name,
        message: error.message,
        details: error.details || error.stack,
      },
    },
  };
};

const formatInternalError = error => {
  const httpError = createError(error);
  return formatHttpError(httpError);
};


module.exports = (/* _, { strapi } */) => {
  return async (ctx, next) => {
    try {
      await next();

      if (!ctx.response._explicitStatus) {
        return ctx.notFound();
      }
    } catch (error) {
      if (error instanceof ApplicationError) {
        const { status, body } = formatApplicationError(error);
        ctx.status = status;
        ctx.body = body;
        return;
      }

      if (error instanceof HttpError) {
        const { status, body } = formatHttpError(error);
        ctx.status = status;
        ctx.body = body;
        return;
      }

      strapi.log.error(error);

      const { status, body } = formatInternalError(error);
      ctx.status = status;
      ctx.body = body;
    }
  };
};




