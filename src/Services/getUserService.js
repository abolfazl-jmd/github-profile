import http from "./httpService";

export const getUser = (username) => {
  return http.get(`/${username}`);
};
