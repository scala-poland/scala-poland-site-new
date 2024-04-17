import { useState, type ReactNode, useMemo } from 'react';
import ReactCompany from '@components/ReactCompany';
import content from '@content/content';
import { TAGS_FROM_COMPANIES, ALL_TAG } from '@domain/constants';
import type { Company } from '@domain/types';
import clsx from 'clsx';
import styles from './ReactCompanies.module.scss';

interface ReactCompaniesProps {
  title?: ReactNode;
  noCompanyMatchInfo?: ReactNode;
}

const ReactCompanies = ({ title, noCompanyMatchInfo }: ReactCompaniesProps): JSX.Element => {
  const [selectedTags, setSelectedTags] = useState<string[]>([ALL_TAG]);

  const removeTag = (tag: string): string[] => {
    const updatedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
    return updatedTags;
  };

  const manageTags = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(removeTag(tag));
    } else if (selectedTags.includes(ALL_TAG) && tag !== ALL_TAG) {
      setSelectedTags([...removeTag(ALL_TAG), tag]);
    } else if (!selectedTags.includes(ALL_TAG) && tag === ALL_TAG) {
      setSelectedTags([ALL_TAG]);
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredCompanies = useMemo(
    () =>
      content.companiesUsingScala.filter(
        ({ tags }) => selectedTags.includes(ALL_TAG) || selectedTags.every((selectedTag) => tags.includes(selectedTag)),
      ),
    [selectedTags],
  );

  const TagButton = ({ value }: { value: string }): JSX.Element => {
    return (
      <button
        id={value}
        className={clsx(styles.tagButton, { [styles.selected]: selectedTags.includes(value) })}
        onClick={() => {
          manageTags(value);
        }}
      >
        {value}
      </button>
    );
  };

  return (
    <section className={styles.companies}>
      {title}
      <div className={styles.tags}>
        <TagButton value={ALL_TAG} />

        {TAGS_FROM_COMPANIES.map((tag: string, index) => (
          <TagButton key={index} value={tag} />
        ))}
      </div>

      <div className={clsx(styles.content, { [styles.noCompanyMatchText]: filteredCompanies.length === 0 })}>
        {filteredCompanies.length > 0
          ? filteredCompanies.map((company: Company, index) => <ReactCompany key={index} {...company} />)
          : noCompanyMatchInfo}
      </div>
    </section>
  );
};

export default ReactCompanies;
