import Repository from "../Repository/Repository";
import styles from "./TopRepository.module.css";
import { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import { getPopularRepos } from "../../Services/getPopularRepos";
import { useEffect } from "react";

const TopRepositories = () => {
  const [searchValue, setSearchValue] = useState("");
  const [popularRepos, setPopularRepos] = useState(null);
  const [popularReposClone, setPopularReposClone] = useState(null);

  const getPopularReposHandler = async () => {
    try {
      const response = await getPopularRepos();
      const topTenRepos = response.data.items.slice(0, 10);
      setPopularRepos(topTenRepos);
      setPopularReposClone(topTenRepos);
    } catch (error) {
      console.log(error);
    }
  };

  const filterPopularRepos = (e) => {
    if (searchValue && searchValue.length >= 3) {
      const filteredRepos = popularRepos.filter((repo) =>
        repo.name.includes(searchValue)
      );
      // setState
      setPopularRepos(filteredRepos);
    } else {
      setPopularRepos(popularReposClone);
    }
  };

  useEffect(() => {
    getPopularReposHandler();
  });

  const submitHandler = (e) => {
    return e;
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Top Repositories</h1>
        <InputComponent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          changeHandler={filterPopularRepos}
        />
      </header>
      {popularRepos &&
        popularRepos.map((repo) => <Repository repo={repo} key={repo.id} />)}
    </div>
  );
};

export default TopRepositories;
