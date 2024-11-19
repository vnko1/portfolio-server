import type { Schema, Struct } from '@strapi/strapi';

export interface ProfileContacts extends Struct.ComponentSchema {
  collectionName: 'components_profile_contacts';
  info: {
    displayName: 'Contacts';
  };
  attributes: {
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileSection extends Struct.ComponentSchema {
  collectionName: 'components_profile_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    secondDescription: Schema.Attribute.RichText;
    subTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'profile.contacts': ProfileContacts;
      'profile.section': ProfileSection;
    }
  }
}
