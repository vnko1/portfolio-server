/**
 * portfolio controller
 */

import { factories } from "@strapi/strapi";

const uid = "api::portfolio.portfolio";

const populateConfig = {
  populate: {
    skills: {
      populate: {
        iconLight: { fields: ["url"] },
        iconDark: { fields: ["url"] },
      },
    },
    projects: {
      populate: {
        banner: { fields: ["url"] },
        techStacks: {
          populate: {
            iconLight: { fields: ["url"] },
            iconDark: { fields: ["url"] },
          },
        },
      },
    },
    avatar: { fields: ["url"] },
    links: { populate: { icon: { fields: ["url"] } } },
    banner: { fields: ["url"] },
    experience: { populate: { icon: { fields: ["url"] } } },
    heroSection: true,
    aboutMeSection: true,
    skillsSection: true,
    experienceSection: true,
    projectsSection: true,
    contactMeSection: true,
    file: true,
  },
};

export default factories.createCoreController(uid, ({ strapi }) => ({
  async find(ctx) {
    ctx.query = { ...populateConfig, ...ctx.query };
    return await strapi.documents(uid).findMany(ctx.query);
  },
}));
