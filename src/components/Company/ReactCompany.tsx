import { useState } from 'react';
import Container from '@components/Container/Container.astro';
import content from '@content/content';
import type { Companies, FiltersType, ImagesType } from '@domain/types';
import styles from './Company.module.scss';

interface Props {
  // class?: string;

  description: string;
  icon?: string;
  image?: ImagesType;
  tags: FiltersType[];
  title: string;
}

function ReactCompany({ description, icon, tags, title, image }) {
  const [filters, setFilters] = useState([]);

  return (
    <div className={styles.company}>
      <section className={styles.information}>
        {/* {image && <div slot="image"> </div>} */}
        {/* {image && <Image src={image} alt="logo image" height={40} />} */}
        {/* {!image && <Icon name={icon || 'handshake'} class="image" height={40} />} */}
        {/* <Title title={title} variant={TITLE_VARIANTS.small} class="companyName" /> */}
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ReactCompany;
