import styles from "./Profile.module.css";
import { MdLink } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Repository from "../Repository/Repository";
import Select from "react-select";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../../Services/getUserService";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Profile = () => {
  const [user, setUser] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const { search } = useLocation();
  const username = search.slice(2); // Getting the username only

  const getUserProfile = async () => {
    try {
      const response = await getUser(username);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // sending ajax call when the component was loaded
  useEffect(() => {
    getUserProfile();
  }, [username]);

  return (
    <div className={styles.wrapper}>
      <article className={styles.profile}>
        <div className={styles.profile__image}>
          <img
            src={user && user.avatar_url}
            alt={user && user.name}
            className={styles.profile__img}
          />

          <div className={styles.profile__names}>
            <h1 className={styles.profile__name}>{user && user.name}</h1>
            <span className={styles.profile__username}>
              @{user && user.login}
            </span>
          </div>
        </div>

        <div className={styles.profile__details}>
          <p className={styles.profile__bio}>{user && user.bio}</p>
          <div className={styles.profile__stats}>
            <div className={styles.profile__stats__box}>
              <span className={styles.profile__stats__name}>Repos</span>
              <span className={styles.profile__stats__number}>
                {user && user.public_repos}
              </span>
            </div>
            <div className={styles.profile__stats__box}>
              <span className={styles.profile__stats__name}>Followers</span>
              <span className={styles.profile__stats__number}>
                {user && user.followers}
              </span>
            </div>
            <div className={styles.profile__stats__box}>
              <span className={styles.profile__stats__name}>Following</span>
              <span className={styles.profile__stats__number}>
                {user && user.following}
              </span>
            </div>
          </div>

          <div className={styles.profile__link}>
            <MdLink className={styles.profile__link__icon} />
            <a
              className={styles.profile__link__address}
              href={user && user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {user && user.html_url}
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
