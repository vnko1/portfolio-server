import type { Schema, Struct } from "@strapi/strapi";

export interface BaseClient extends Struct.ComponentSchema {
  collectionName: "components_base_clients";
  info: {
    displayName: "Client";
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseLink extends Struct.ComponentSchema {
  collectionName: "components_base_links";
  info: {
    description: "";
    displayName: "Link";
  };
  attributes: {
    icon: Schema.Attribute.Media<"images">;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface BaseSkill extends Struct.ComponentSchema {
  collectionName: "components_base_skills";
  info: {
    description: "";
    displayName: "Skill";
  };
  attributes: {
    icon: Schema.Attribute.Media<"images">;
    progress: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsExperience extends Struct.ComponentSchema {
  collectionName: "components_cards_experiences";
  info: {
    displayName: "Experience";
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    period: Schema.Attribute.Text & Schema.Attribute.Required;
    place: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsPrice extends Struct.ComponentSchema {
  collectionName: "components_cards_prices";
  info: {
    description: "";
    displayName: "Price";
  };
  attributes: {
    amount: Schema.Attribute.Integer & Schema.Attribute.Required;
    billing_system: Schema.Attribute.String;
    currency: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<"images">;
    includes: Schema.Attribute.Text & Schema.Attribute.Required;
    tariff: Schema.Attribute.Enumeration<["basic", "premium", "unlimited"]> &
      Schema.Attribute.Required;
  };
}

export interface CardsProject extends Struct.ComponentSchema {
  collectionName: "components_cards_projects";
  info: {
    description: "";
    displayName: "Project";
  };
  attributes: {
    banner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    code_link: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    live_link: Schema.Attribute.String & Schema.Attribute.Required;
    tech_stack: Schema.Attribute.Text & Schema.Attribute.Required;
    titlle: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<["web"]>;
  };
}

export interface CardsReview extends Struct.ComponentSchema {
  collectionName: "components_cards_reviews";
  info: {
    description: "";
    displayName: "Review";
  };
  attributes: {
    avatar: Schema.Attribute.Media<"images">;
    full_name: Schema.Attribute.String & Schema.Attribute.Required;
    location: Schema.Attribute.Text;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface CardsService extends Struct.ComponentSchema {
  collectionName: "components_cards_services";
  info: {
    displayName: "Service";
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "base.client": BaseClient;
      "base.link": BaseLink;
      "base.skill": BaseSkill;
      "cards.experience": CardsExperience;
      "cards.price": CardsPrice;
      "cards.project": CardsProject;
      "cards.review": CardsReview;
      "cards.service": CardsService;
    }
  }
}
