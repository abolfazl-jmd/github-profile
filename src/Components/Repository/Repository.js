import styles from "./Repository.module.css";

const Repository = ({ repo }) => {
  return (
    <article className={styles.repository}>
      <div className={styles.repository__details}>
        <h1 className={styles.repository__name}>{repo && repo.name}</h1>
        <span className={styles.repository__update}>
          {repo && repo.updated_at.split("T")[0]}
        </span>
      </div>
      <div className={styles.repository__details}>
        <span className={styles.repository__stars}>
          stars : {repo && repo.stargazers_count}
        </span>
        <span className={styles.repository__forks}>
          forks : {repo && repo.forks}
        </span>
      </div>
    </article>
  );
};

export default Repository;
