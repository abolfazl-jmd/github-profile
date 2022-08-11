import user from "../../assets/user.jfif";
import styles from "./Profile.module.css";
import { MdLink } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Repository from "../Repository/Repository";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const history = useLocation();
  console.log(history);

  return (
    <div className={styles.wrapper}>
      <article className={styles.profile}>
        <div className={styles.profile__image}>
          <img src={user} alt="person name" className={styles.profile__img} />

          <div className={styles.profile__names}>
            <h1 className={styles.profile__name}>The Octocat</h1>
            <span className={styles.profile__username}>@octocat</span>
          </div>
        </div>

        <div className={styles.profile__details}>
          <p className={styles.profile__bio}>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem
          </p>
          <div className={styles.profile__stats}>
            <div className={styles.profile__stats__box}>
              <span className={styles.profile__stats__name}>Repos</span>
              <span className={styles.profile__stats__number}>8</span>
            </div>
            <div className={styles.profile__stats__box}>
              <span className={styles.profile__stats__name}>Followers</span>
              <span className={styles.profile__stats__number}>145</span>
            </div>
            <div className={styles.profile__stats__box}>
              <span className={styles.profile__stats__name}>Following</span>
              <span className={styles.profile__stats__number}>20</span>
            </div>
          </div>

          <div className={styles.profile__link}>
            <MdLink className={styles.profile__link__icon} />
            <a
              className={styles.profile__link__address}
              href="https://tailwindcss.com/docs/customizing-colors"
              target="_blank"
              rel="noreferrer"
            >
              https://tailwindcss.com/docs/customizing-colors
            </a>
          </div>
        </div>
      </article>

      {/* Repositories of this profile */}

      <div className={styles.profile__repositories}>
        <header className={styles.profile__repositories__header}>
          <h1>User's Repositories</h1>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </header>
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
      </div>
    </div>
  );
};

export default Profile;
