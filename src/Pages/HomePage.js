import SearchInput from "../Components/InputComponent/InputComponent";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchValue);

    navigate(`/username?=${searchValue}`);

    // cleaning the input
    setSearchValue("");
  };

  return (
    <div className={styles.wrapper}>
      <SearchInput
        submitHandler={submitHandler}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default HomePage;
