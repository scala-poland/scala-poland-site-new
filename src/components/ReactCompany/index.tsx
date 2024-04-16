import type { ImagesType } from '@domain/types';
import styles from './ReactCompany.module.scss';

interface ReactCompanyProps {
  description: string;
  image?: ImagesType | string;
  tags: string[];
  title: string;
}

function ReactCompany({ description, tags, title, image }: ReactCompanyProps) {
  return (
    <div className={styles.company}>
      <section className={styles.information}>
        {image && <img src={typeof image === 'string' ? image : image.src} alt="logo image" className={styles.image} />}
        <h4 className={styles.companyName}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ReactCompany;
