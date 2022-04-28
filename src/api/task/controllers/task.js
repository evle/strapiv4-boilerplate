"use strict";

/**
 *  task controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::task.task", ({ strapi }) => ({
  async find(ctx) {
    const { data } = await super.find(ctx);

    const projects = await strapi.entityService.findMany(
      "api::project.project"
    );
    data.forEach((task) => {
      if (task.attributes.effort.length > 0) {
        task.attributes.effort.forEach((effort) => {
          projects.forEach((proj) => {
            if (proj.id == effort.projectID) {
              effort.projectName = proj.name;
              console.log(effort);
            }
          });
        });
      }
    });
    console.log(data);

    // console.log(projects)

    return { data };
  },
}));
