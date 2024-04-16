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

const ReactCompanies = ({ title }: ReactCompaniesProps): JSX.Element => {
  const [selectedTag, setTag] = useState<string>(ALL_TAG);

  const TagButton = ({ value }: { value: string }): JSX.Element => {
    return (
      <button
        id={value}
        className={clsx(styles.tagButton, value === selectedTag && styles.selected)}
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
          .map(({ image, title, description, tags, imageAlt }: Companies, index) => (
            <ReactCompany
              key={index}
              image={image}
              imageAlt={imageAlt}
              title={title}
              description={description}
              tags={tags}
            />
          ))}
      </div>
    </section>
  );
};

export default ReactCompanies;
