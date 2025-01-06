import type { Schema, Struct } from '@strapi/strapi';

export interface BaseExperience extends Struct.ComponentSchema {
  collectionName: 'components_base_experiences';
  info: {
    description: '';
    displayName: 'Experience';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    iconDark: Schema.Attribute.Media<'images'>;
    iconDescription: Schema.Attribute.Text;
    iconLight: Schema.Attribute.Media<'images'>;
    period: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseLink extends Struct.ComponentSchema {
  collectionName: 'components_base_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    iconDescription: Schema.Attribute.String;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseProject extends Struct.ComponentSchema {
  collectionName: 'components_base_projects';
  info: {
    description: '';
    displayName: 'Project';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    bannerDescription: Schema.Attribute.Text;
    codeLink: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    liveLink: Schema.Attribute.String & Schema.Attribute.Required;
    techStacks: Schema.Attribute.Component<'base.skill', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseSkill extends Struct.ComponentSchema {
  collectionName: 'components_base_tech_stacks';
  info: {
    description: '';
    displayName: 'skill';
  };
  attributes: {
    iconDark: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    iconDescription: Schema.Attribute.Text;
    iconLight: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<' '>;
    secondaryDescription: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'base.experience': BaseExperience;
      'base.link': BaseLink;
      'base.project': BaseProject;
      'base.skill': BaseSkill;
      'page.section': PageSection;
    }
  }
}
