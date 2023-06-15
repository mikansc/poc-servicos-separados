import { post } from "./http-service";

export const login = (credentials) => {
  return post("api/login", credentials);
};
