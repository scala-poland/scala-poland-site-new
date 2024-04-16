import type { Companies } from '@domain/types';
import styles from './ReactCompany.module.scss';

function ReactCompany({ description, tags, title, image, imageAlt = '' }: Companies) {
  return (
    <div className={styles.company}>
      <section className={styles.information}>
        {image && <img src={typeof image === 'string' ? image : image.src} alt={imageAlt} className={styles.image} />}
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
