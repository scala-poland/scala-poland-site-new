import { useState, type ReactNode } from 'react';
import ReactCompany from '@components/ReactCompany';
import content from '@content/content';
import { TAGS_FROM_COMPANIES, ALL_TAG } from '@domain/constants';
import type { Companies } from '@domain/types';
import clsx from 'clsx';
import styles from './ReactCompanies.module.scss';

interface ReactCompaniesProps {
  title?: ReactNode;
}

const ReactCompanies = ({ title }: ReactCompaniesProps) => {
  const [selectedTag, setTag] = useState<string>(ALL_TAG);

  return (
    <section className={styles.companies}>
      {title}
      <div className={styles.tags}>
        <button
          id={ALL_TAG}
          key={ALL_TAG}
          className={clsx(styles.tagButton, ALL_TAG === selectedTag && styles.selected)}
          onClick={() => {
            setTag(ALL_TAG);
          }}
        >
          {ALL_TAG}
        </button>

        {TAGS_FROM_COMPANIES.map((filter: string) => (
          <button
            id={filter}
            key={filter}
            className={clsx(styles.tagButton, filter === selectedTag && styles.selected)}
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
          .filter(({ tags }) => selectedTag === ALL_TAG || tags.includes(selectedTag))
          .map(({ image, title, description, tags }: Companies, index) => (
            <ReactCompany key={index} image={image} title={title} description={description} tags={tags} />
          ))}
      </div>
    </section>
  );
};

export default ReactCompanies;
