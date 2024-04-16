import content from '@content/content';

export const TITLE_ICONS = {
  email: 'email',
  handshake: 'handshake',
  calendar: 'calendar',
  userGroup: 'user-group',
};

export const TITLE_VARIANTS = {
  extraLargeUnderline: 'extraLargeUnderline',
  largeUnderline: 'largeUnderline',
  mediumUnderline: 'mediumUnderline',
  medium: 'medium',
  small: 'small',
};

export const LINK_BUTTON_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
};

export const ALL_TAG = 'ALL' as const;

export const TAGS_FROM_COMPANIES = content.companiesUsingScala
  .map(({ tags }) => tags)
  .flat()
  .reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, [] as string[]);
