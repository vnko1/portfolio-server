/**
 * home-page controller
 */

import { factories } from "@strapi/strapi";

const uid = "api::home-page.home-page";

export default factories.createCoreController(uid,
  ({ strapi }) => ({
    async find(ctx) {
      console.log(ctx.query);
      return await strapi.documents(uid).findMany(ctx.query);
    },
  }));
