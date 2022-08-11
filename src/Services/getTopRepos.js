import http from "./httpService";

export const getTopRepos = () => {
  return http.get(`search/repositories?q=stars:%3E1&sort=stars`);
};
