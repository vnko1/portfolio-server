/**
 * portfolio controller
 */

import { factories } from "@strapi/strapi";

const uid = "api::portfolio.portfolio";

export default factories.createCoreController(uid, ({ strapi }) => ({
  async find() {
    return await strapi.documents(uid).findMany({
      populate: {
        contacts: { populate: { icon: { fields: ["url"] } } },
        expertise: {
          populate: { icon: { fields: ["url"] }, stackList: true },
        },
        careerHistory: true,
        projects: { populate: { banner: { fields: ["url"] } } },
      },
    });
  },
}));
