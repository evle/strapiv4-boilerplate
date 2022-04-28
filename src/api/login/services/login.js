"use strict";

// const axios = require("axios");
// const https = require("https");
const curl = require("../../../utils/curl");
module.exports = () => ({
  getUserinfo: async (Ticket) => {
    const { Data: token } = await curl({
      url: "https://profileportal.asia.pwcinternal.com/AppCenterAPIs/app/gettoken",
      method: "POST",
      data: {
        AppCode: "teamdashboard",
        AppSecret:
          "ipMlBsV9MwpnYwXxC0por6MOe6aUPbte0e3lLFb2RQHEYelqIVwt7t3bCY6uh1jB",
      },
    });
    
    // TODO: logging  -> strapi.log.info(token)

    if (token) {
      const { Data: user } = await curl({
        url: "https://profileportal.asia.pwcinternal.com/AppCenterAPIs/User/GetUserInfoByTicket",
        method: "POST",
        data: {
          Ticket,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return user;
    } 

    

    return null;
  },
});
