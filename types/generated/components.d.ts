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

export interface BaseProjectCard extends Struct.ComponentSchema {
  collectionName: "components_base_project_cards";
  info: {
    displayName: "ProjectCard";
  };
  attributes: {
    banner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    codeLink: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    liveLink: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseQualificationCard extends Struct.ComponentSchema {
  collectionName: "components_base_qualification_cards";
  info: {
    displayName: "QualificationCard";
  };
  attributes: {
    period: Schema.Attribute.Text & Schema.Attribute.Required;
    place: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseServiceCard extends Struct.ComponentSchema {
  collectionName: "components_base_service_cards";
  info: {
    displayName: "serviceCard";
  };
  attributes: {
    banner: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseSkill extends Struct.ComponentSchema {
  collectionName: "components_base_skills";
  info: {
    description: "";
    displayName: "Skill";
  };
  attributes: {
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios"> &
      Schema.Attribute.Required;
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

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "base.link": BaseLink;
      "base.project-card": BaseProjectCard;
      "base.qualification-card": BaseQualificationCard;
      "base.service-card": BaseServiceCard;
      "base.skill": BaseSkill;
    }
  }
}
