"use strict";

/**
 * holiday service.
 */

const curl = require("../../../utils/curl");

module.exports = () => ({
  getTotalHour: async (data) => {
    const [res] = await curl({
      url: "https://cnshaappuwv783.asia.pwcinternal.com/api/cn444969/leave2/leavetotalworkhours",
      method: "POST",
      data,
    });

    return res["TotalWorkHours"] ? res["TotalWorkHours"] : null;
  },
});
