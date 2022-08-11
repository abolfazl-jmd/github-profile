import { MdSearch } from "react-icons/md";
import { useState } from "react";
import styles from "./InputComponent.module.css";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchValue);

    navigate(`/username?=${searchValue}`);

    // cleaning the input
    setSearchValue("");
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
