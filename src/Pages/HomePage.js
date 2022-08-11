import SearchInput from "../Components/InputComponent/InputComponent";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <SearchInput />
    </div>
  );
};

export default HomePage;
