import React, { useState } from 'react';
import ReactCompany from '@components/Company/ReactCompany';
import Container from '@components/Container/Container.astro';
import content from '@content/content';
import type { Companies, FiltersType } from '@domain/types';
import styles from './Companies.module.scss';

const ReactCompanies = (props) => {
  const [filters, setFilters] = useState('ALL');

  return (
    <>
      <div className={styles.filters}>
        {content.companiesUsingScala.filters.map((filter: FiltersType) => (
          <button
            id={filter}
            key={filter}
            className={styles.filterButton}
            onClick={() => {
              setFilters(filter);
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {content.companiesUsingScala.companies.map(({ image, icon, title, description, tags }: Companies, index) => (
          <ReactCompany key={index} image={image} icon={icon} title={title} description={description} tags={tags} />
        ))}
      </div>
    </>
  );
};

export default ReactCompanies;
