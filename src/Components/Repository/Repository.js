import styles from "./Repository.module.css";

const Repository = () => {
  return (
    <article className={styles.repository}>
      <div className={styles.repository__details}>
        <h1 className={styles.repository__name}>Repository name</h1>
        <span className={styles.repository__update}>updated on July 5</span>
      </div>
      <div className={styles.repository__details}>
        <span className={styles.repository__stars}>stars : 30</span>
        <span className={styles.repository__forks}>forks : 23</span>
      </div>
    </article>
  );
};

export default Repository;
