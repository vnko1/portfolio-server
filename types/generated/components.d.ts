import type { Schema, Struct } from '@strapi/strapi';

export interface ProfileCareer extends Struct.ComponentSchema {
  collectionName: 'components_profile_careers';
  info: {
    description: '';
    displayName: 'Career';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    period: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileContact extends Struct.ComponentSchema {
  collectionName: 'components_profile_contacts';
  info: {
    description: '';
    displayName: 'Contact';
  };
  attributes: {
    darkIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    lightIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileExperience extends Struct.ComponentSchema {
  collectionName: 'components_profile_experiences';
  info: {
    description: '';
    displayName: 'Experience';
  };
  attributes: {
    darkIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    lightIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    stackList: Schema.Attribute.Component<'profile.skill', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileProject extends Struct.ComponentSchema {
  collectionName: 'components_profile_projects';
  info: {
    description: '';
    displayName: 'Project';
  };
  attributes: {
    banner: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileSkill extends Struct.ComponentSchema {
  collectionName: 'components_profile_skills';
  info: {
    description: '';
    displayName: 'Skill';
  };
  attributes: {
    skill: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'profile.career': ProfileCareer;
      'profile.contact': ProfileContact;
      'profile.experience': ProfileExperience;
      'profile.project': ProfileProject;
      'profile.skill': ProfileSkill;
    }
  }
}
