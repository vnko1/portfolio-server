import type { Schema, Struct } from '@strapi/strapi';

export interface BaseLink extends Struct.ComponentSchema {
  collectionName: 'components_base_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    iconDescription: Schema.Attribute.String;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BaseTechStack extends Struct.ComponentSchema {
  collectionName: 'components_base_tech_stacks';
  info: {
    displayName: 'TechStack';
  };
  attributes: {
    techStack: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagesSection extends Struct.ComponentSchema {
  collectionName: 'components_pages_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    projects: Schema.Attribute.Component<'projects.project', true>;
    techStack: Schema.Attribute.Component<'base.tech-stack', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectsProject extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    bannerDescription: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'base.link', true>;
    techStack: Schema.Attribute.Component<'base.tech-stack', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'base.link': BaseLink;
      'base.tech-stack': BaseTechStack;
      'pages.section': PagesSection;
      'projects.project': ProjectsProject;
    }
  }
}
