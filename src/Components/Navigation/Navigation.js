import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <NavLink to="/" className={styles.link}>
          <li>Home</li>
        </NavLink>

        <NavLink to="/most-popular" className={styles.link}>
          <li>Top Repositories</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
