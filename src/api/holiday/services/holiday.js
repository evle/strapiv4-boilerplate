"use strict";

/**
 * holiday service.
 */

module.exports = () => ({
  getTotalHour: async (data) => {
    const [res] = await strapi.curl({
      url: "https://cnshaappuwv783.asia.pwcinternal.com/api/cn444969/leave2/leavetotalworkhours",
      method: "POST",
      data,
    });

    strapi.log.info(res.TotalWorkHours)

    return res.TotalWorkHours;
  },
});
