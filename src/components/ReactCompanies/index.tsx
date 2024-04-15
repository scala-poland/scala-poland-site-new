import { useState, type ReactNode } from 'react';
import ReactCompany from '@components/ReactCompany';
import content from '@content/content';
import type { Companies, FiltersType } from '@domain/types';
import styles from './ReactCompanies.module.scss';

interface ReactCompaniesProps {
  title: ReactNode;
}

const ReactCompanies = ({ title }: ReactCompaniesProps) => {
  const [selectedTag, setTag] = useState('ALL');

  return (
    <section className={styles.companies}>
      {title}
      <div className={styles.filters}>
        {content.companiesUsingScala.filters.map((filter: FiltersType) => (
          <button
            id={filter}
            key={filter}
            className={clsx(styles.filterButton, filter === selectedTag && styles.selected)}
            onClick={() => {
              setFilters(filter);
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {content.companiesUsingScala.companies.map(({ image, title, description, tags }: Companies, index) => (
          <ReactCompany key={index} image={image} title={title} description={description} tags={tags} />
        ))}
      </div>
    </section>
  );
};

export default ReactCompanies;
