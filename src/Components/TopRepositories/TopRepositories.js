import Repository from "../Repository/Repository";
import styles from "./TopRepository.module.css";
import { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";

const TopRepositories = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Top Repositories</h1>
        <InputComponent />
      </header>
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
      <Repository />
    </div>
  );
};

export default TopRepositories;
