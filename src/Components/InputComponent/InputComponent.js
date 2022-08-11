import { MdSearch } from "react-icons/md";
import styles from "./InputComponent.module.css";

const SearchInput = ({
  submitHandler,
  searchValue,
  setSearchValue,
  changerHandler,
}) => {
  const searchHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    changerHandler(e.target.value.toLowerCase());
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.searchBox}>
        <MdSearch className={styles.searchIcon} />
        <input
          type="text"
          value={searchValue}
          placeholder="Search Github username..."
          onChange={(e) => searchHandler(e)}
        />
        <button className={styles.searchBtn}>Search</button>
      </div>
    </form>
  );
};

export default SearchInput;
