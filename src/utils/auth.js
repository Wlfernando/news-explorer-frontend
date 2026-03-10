import { getUser, identify, register } from "./MainApi";

export function signup({name, email, password}) {
  return register({name, email, password});
};

export function signin({email, password}) {
  return identify({email, password})
    .then((UTCdate) => {
      const user = getUser();
      document.cookie = `storage-access=true;expires=${UTCdate}`;

      return user
    })
};