import http from "./httpService";

export const getUserRepos = (username) => {
  return http.get(`/${username}/repos`);
};
