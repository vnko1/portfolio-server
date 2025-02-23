/**
 * category controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::category.category",
  (ctx) => ({
    async find(ctx) {
      ctx.query = { populate: { projects: { fields: ["id"] } }, ...ctx.query };
      const { data, meta } = await super.find(ctx);
      const filteredData = data.filter((el) => !!el.projects.length);
      meta.pagination = { ...meta.pagination, total: filteredData.length };
      return {
        data: filteredData,
        meta,
      };
    },
  })
);
