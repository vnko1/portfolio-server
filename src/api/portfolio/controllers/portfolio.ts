/**
 * portfolio controller
 */

import { factories } from "@strapi/strapi";

const uid = "api::portfolio.portfolio";

export default factories.createCoreController(uid, ({ strapi }) => ({
  async find(ctx) {
    return await strapi.documents(uid).findMany(ctx.query);
  },
}));
