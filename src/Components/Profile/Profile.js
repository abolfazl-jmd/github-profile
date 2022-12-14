import styles from "./Profile.module.css";
import { MdLink } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Repository from "../Repository/Repository";
import Select from "react-select";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../../Services/getUserService";
import { getUserRepos } from "../../Services/getUserRepos";
import _ from "lodash";

const options = [
  { value: "all", label: "All Repos" },
  { value: "forks", label: "Most Forks" },
  { value: "stars", label: "Most Stars" },
  { value: "update", label: "Latest Update" },
];

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [userReposClone, setUserReposClone] = useState(null);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const { search } = useLocation();
  const username = search.slice(2); // Getting the username only

  const getUserProfile = async () => {
    try {
      const response = await getUser(username);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserRepositories = async () => {
    try {
      const response = await getUserRepos(username);
      setUserRepos(response.data);
      setUserReposClone(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sortReposHandler = (e) => {
    const filterType = e.value;
    switch (filterType) {
      case "forks": {
        const filteredRepos = _.orderBy(userRepos, ["forks"], ["desc"]); // Use Lodash to sort array by 'fork'

        setUserRepos(filteredRepos);
        break;
      }
      case "stars": {
        const filteredRepos = _.orderBy(
          userRepos,
          ["stargazers_count"],
          ["desc"]
        );

        setUserRepos(filteredRepos);
        break;
      }
      case "update": {
        const filteredRepos = _.orderBy(userRepos, ["updated_at"], ["desc"]);
        setUserRepos(filteredRepos);
        break;
      }

      default:
        setUserRepos(userReposClone);
        break;
    }
  };

  // sending ajax call when the component was loaded
  useEffect(() => {
    getUserProfile();
    getUserRepositories();
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
            onChange={sortReposHandler}
            options={options}
          />
        </header>
        {userRepos &&
          userRepos.map((repo) => <Repository repo={repo} key={repo.id} />)}
      </div>
    </div>
  );
};

export default Profile;
