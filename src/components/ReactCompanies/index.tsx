import { useState, type ReactNode } from 'react';
import ReactCompany from '@components/ReactCompany';
import content from '@content/content';
import { TAGS_FROM_COMPANIES, ALL_TAG } from '@domain/constants';
import type { Company } from '@domain/types';
import clsx from 'clsx';
import styles from './ReactCompanies.module.scss';

interface ReactCompaniesProps {
  title?: ReactNode;
}

const ReactCompanies = ({ title }: ReactCompaniesProps): JSX.Element => {
  const [selectedTag, setTag] = useState<string>(ALL_TAG);

  const TagButton = ({ value }: { value: string }): JSX.Element => {
    return (
      <button
        id={value}
        className={clsx(styles.tagButton, { 'styles.selected': Boolean(value === selectedTag) })}
        onClick={() => {
          setTag(value);
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

        {TAGS_FROM_COMPANIES.map((tag: string) => (
          <TagButton value={tag} />
        ))}
      </div>

      <div className={styles.content}>
        {content.companiesUsingScala
          .filter(({ tags }) => selectedTag === ALL_TAG || tags.includes(selectedTag))
          .map((company: Company, index) => (
            <ReactCompany key={index} {...company} />
          ))}
      </div>
    </section>
  );
};

export default ReactCompanies;
