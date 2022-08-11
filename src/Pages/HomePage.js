import SearchInput from "../Components/InputComponent/InputComponent";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (searchValue) {
      navigate(`/username?=${searchValue}`);
    }

    // cleaning the input
    setSearchValue("");
  };

  const changeHandler = (e) => {
    return e;
  };

  return (
    <div className={styles.wrapper}>
      <SearchInput
        submitHandler={submitHandler}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        changeHandler={changeHandler}
      />
    </div>
  );
};

export default HomePage;
