import type { IMAGES } from '@images/images';
import type { LINK_BUTTON_VARIANTS, TITLE_ICONS, TITLE_VARIANTS } from './constants';

export type TitleIconsType = (typeof TITLE_ICONS)[keyof typeof TITLE_ICONS];
export type TitleVariantsType = (typeof TITLE_VARIANTS)[keyof typeof TITLE_VARIANTS];
export type ImagesType = (typeof IMAGES)[keyof typeof IMAGES];
export type LinkButtonVariantsType = (typeof LINK_BUTTON_VARIANTS)[keyof typeof LINK_BUTTON_VARIANTS];

export interface Content {
  heroDescription: string;
  introductionText: string;
  learningMaterials: LearningMaterial[];
  companiesUsingScala: Company[];
  meetupGroups: MeetupGroup[];
  conferences: Conference[];
}

export interface LearningMaterial {
  title: string;
  link: string;
}

export interface Company {
  image?: ImagesType | string;
  imageAlt?: string;
  title: string;
  description: string;
  tags: string[];
}

export interface MeetupGroup {
  icon?: string;
  image?: ImagesType | string;
  imageAlt?: string;
  link: string;
  title: string;
}

export interface Conference {
  title: string;
  image: ImagesType | string;
  imageAlt?: string;
  description: string;
}
