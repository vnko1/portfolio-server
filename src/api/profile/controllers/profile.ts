/**
 * profile controller
 */

import { factories } from "@strapi/strapi";

const uid = "api::profile.profile";

export default factories.createCoreController(uid, ({ strapi }) => ({
  async find(ctx) {
    return await strapi.documents(uid).findMany({
      populate: {
        avatar: { fields: ["url"] },
        heroSection: true,
        aboutSection: true,
        projectsSection: true,
        contactSection: true,
        skills: true,
        contacts: { populate: { image: { fields: ["url"] } } },
        projects: {
          populate: {
            banner: { fields: ["url"] },
          },
          fields: ["title", "preview"],
        },
      },
    });
  },
}));
