import http from "./httpService";

export const getPopularRepos = () => {
  return http.get(`search/repositories?q=stars:>1&sort=stars`);
};
