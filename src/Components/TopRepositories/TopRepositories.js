import Repository from "../Repository/Repository";
import styles from "./TopRepository.module.css";
import { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import { getTopRepos } from "../../Services/getTopRepos";
import { useEffect } from "react";

const TopRepositories = () => {
  const [searchValue, setSearchValue] = useState("");
  const [popularRepos, setPopularRepos] = useState(null);
  const [popularReposClone, setPopularReposClone] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchValue);

    // cleaning the input
    setSearchValue("");
  };

  const searchFilterHandler = (value) => {
    if (value && value.length === 3) {
      const filteredRepos = popularRepos.filter((repo) =>
        repo.name.includes(value)
      );
      setPopularRepos(filteredRepos);
    } else {
      setPopularRepos(popularReposClone);
    }
  };

  const getPopularRepos = async () => {
    try {
      const response = await getTopRepos();
      const topTenPopular = response.data.items.slice(1, 11); // Getting the first 10 popular repos
      setPopularRepos(topTenPopular);
      setPopularReposClone(topTenPopular);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPopularRepos();
  });

  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Top Repositories</h1>
        <InputComponent
          submitHandler={submitHandler}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          changerHandler={searchFilterHandler}
        />
      </header>
      {popularRepos &&
        popularRepos.map((repo) => <Repository repo={repo} key={repo.id} />)}
    </div>
  );
};

export default TopRepositories;
