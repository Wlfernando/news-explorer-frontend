import { getUser, identify } from "./MainApi";

export function signup({name, email, password}) {
  return identify({name, email, password});
};

export function signin({email, password}) {
  return identify({email, password})
    .then(({ token }) => {
      localStorage.setItem('token', token);
      return getUser();
    });
};