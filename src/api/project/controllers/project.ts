/**
 * project controller
 */

import { factories } from "@strapi/strapi";

const uid = "api::project.project";

const defaultConfig = { populate: { banner: { fields: ["url"] } } };

export default factories.createCoreController(uid, ({ strapi }) => ({
  async find(ctx) {
    return await strapi
      .documents(uid)
      .findMany({ populate: { banner: { fields: ["url"] } } });
  },

  async findOne(ctx) {
    return await strapi.documents(uid).findOne({
      documentId: ctx.params.id,
      populate: { banner: { fields: ["url"] }, tools: true },
    });
  },
}));
