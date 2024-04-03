import type { IMAGES } from '@images/images';
import type { FILTERS, LINK_BUTTON_VARIANTS, TITLE_ICONS, TITLE_VARIANTS } from './constants';

export type TitleIconsType = (typeof TITLE_ICONS)[keyof typeof TITLE_ICONS];
export type TitleVariantsType = (typeof TITLE_VARIANTS)[keyof typeof TITLE_VARIANTS];
export type ImagesType = (typeof IMAGES)[keyof typeof IMAGES];
export type FiltersType = (typeof FILTERS)[keyof typeof FILTERS];
export type LinkButtonVariantsType = (typeof LINK_BUTTON_VARIANTS)[keyof typeof LINK_BUTTON_VARIANTS];

export interface Content {
  heroDescription: string;
  introductionText: string;
  learningMaterials: LearningMaterials[];
  companiesUsingScala: CompaniesUsingScala;
  meetupGroups: MeetupGroups[];
  conferences: Conferences[];
}

export interface LearningMaterials {
  title: string;
  link: string;
}

export interface Companies {
  image?: ImagesType;
  title: string;
  description: string;
  tags: FiltersType[];
}

export interface CompaniesUsingScala {
  filters: FiltersType[];
  companies: Companies[];
}

export interface MeetupGroups {
  icon?: string;
  image?: ImagesType;
  link: string;
  title: string;
}

export interface Conferences {
  title: string;
  image: ImagesType;
  description: string;
}
