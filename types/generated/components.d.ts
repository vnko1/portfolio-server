import type { Schema, Struct } from "@strapi/strapi";

export interface BaseLink extends Struct.ComponentSchema {
  collectionName: "components_base_links";
  info: {
    description: "";
    displayName: "Link";
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<"images">;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseSkill extends Struct.ComponentSchema {
  collectionName: "components_base_tech_stacks";
  info: {
    description: "";
    displayName: "skill";
  };
  attributes: {
    icon: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "base.link": BaseLink;
      "base.skill": BaseSkill;
    }
  }
}
