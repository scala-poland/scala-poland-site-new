import React, { useState } from 'react';
import Container from '@components/Container/Container.astro';
import content from '@content/content';
import type { Companies, FiltersType } from '@domain/types';
import styles from './Companies.module.scss';

const ReactCompanies = (props) => {
  const [filters, setFilters] = useState('ALL');
  const [f, setF] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setF(!f);
        }}
      >
        {f ? 'true' : 'false'}Click
      </button>
      <div className={styles.filters}>
        {content.companiesUsingScala.filters.map((filter: FiltersType) => (
          <button
            id={filter}
            key={filter}
            className={styles.filterButton}
            onClick={() => {
              //   setFilters(filter);
              console.log('###');
            }}
          >
            a{filter}
          </button>
        ))}
      </div>

      {/* <div className={styles.content}>
        {content.companiesUsingScala.companies.map(({ image, icon, title, description, tags }: Companies) => (
          <p>p</p>
        ))}
      </div> */}
    </>
  );
};

export default ReactCompanies;
