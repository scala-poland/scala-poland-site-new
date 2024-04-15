import { useState, type ReactNode } from 'react';
import ReactCompany from '@components/ReactCompany';
import content from '@content/content';
import { TAGS_FROM_COMPANIES } from '@domain/constants';
import type { Companies } from '@domain/types';
import clsx from 'clsx';
import styles from './ReactCompanies.module.scss';

interface ReactCompaniesProps {
  title: ReactNode;
}

const ReactCompanies = ({ title }: ReactCompaniesProps) => {
  const [selectedTag, setTag] = useState('ALL');
  const allTag = 'ALL' as const;

  return (
    <section className={styles.companies}>
      {title}
      <div className={styles.filters}>
        <button
          id={allTag}
          key={allTag}
          className={clsx(styles.filterButton, allTag === selectedTag && styles.selected)}
          onClick={() => {
            setTag(allTag);
          }}
        >
          {allTag}
        </button>

        {TAGS_FROM_COMPANIES.map((filter: string) => (
          <button
            id={filter}
            key={filter}
            className={clsx(styles.filterButton, filter === selectedTag && styles.selected)}
            onClick={() => {
              setTag(filter);
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {content.companiesUsingScala
          .filter(({ tags }) => selectedTag === allTag || tags.includes(selectedTag))
          .map(({ image, title, description, tags }: Companies, index) => (
            <ReactCompany key={index} image={image} title={title} description={description} tags={tags} />
          ))}
      </div>
    </section>
  );
};

export default ReactCompanies;
