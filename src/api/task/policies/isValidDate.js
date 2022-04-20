'use strict';

/**
 * `isValidDate` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In isValidDate policy.');

    const canDoSomething = true;
    strapi.log.info('In isValidDate policy.',policyContext,config, strapi);
    console.log(policyContext,config, strapi )

    if (canDoSomething) {
      return true;
    }

    return false;
};
