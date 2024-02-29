import type { TITLE_ICONS, TITLE_VARIANTS } from './constants';

export type TitleIconsType = (typeof TITLE_ICONS)[keyof typeof TITLE_ICONS];
export type TitleVariantsType = (typeof TITLE_VARIANTS)[keyof typeof TITLE_VARIANTS];
