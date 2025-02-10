import type { Schema, Struct } from "@strapi/strapi";

export interface BaseLink extends Struct.ComponentSchema {
  collectionName: "components_base_links";
  info: {
    displayName: "Link";
  };
  attributes: {
    icon: Schema.Attribute.Media<"images">;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "base.link": BaseLink;
    }
  }
}
