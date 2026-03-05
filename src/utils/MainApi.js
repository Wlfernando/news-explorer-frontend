import { sixDays, BASE_URL } from "./const";

const headers = {
  "Content-Type": "application/json",
};

const credentials = 'include';

const basicOptions = {
  headers,
  credentials,
};

async function confirm(res) {
  if (res.ok) {
    if ([204, 205].includes(res.status))
      return;

    return res.json();
  }

  const err = await res.json();

  if ('validation' in err) {
    return Promise.reject(err.validation.body.message)
  }

  return Promise.reject(err.message)
}

function getPostOpt(body) {
  return {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  }
}

function getPostOptWithCredentials(body) {
  return {
    ...getPostOpt(body),
    credentials,
  }
}

export function register(body) {
  return fetch(BASE_URL + '/signup', getPostOpt(body))
    .then(confirm)
}

export function identify(body) {
  return fetch(BASE_URL + '/signin', getPostOptWithCredentials(body))
    .then(confirm);
};

export function getUser() {
  return fetch(BASE_URL + '/users/me', basicOptions)
    .then(confirm);
};

export function postNotice(body) {
  return fetch(BASE_URL + '/articles', getPostOptWithCredentials(body))
    .then(confirm)
};

export function deleteNotice(id) {
  return fetch(BASE_URL + '/articles/' + id, {
    method: "DELETE",
    ...basicOptions,
  })
    .then(confirm)
};

export function getNotices() {
  return fetch(BASE_URL + '/articles', basicOptions)
    .then(confirm)
}

export function closeStorageNews() {
  return fetch(BASE_URL + '/signin', {
    method: "DELETE",
    ...basicOptions,
  })
    .then(confirm)
}

let searchParams = '';

export function getNews({q, page = 1}) {
  if (q) {
    const from = new Date(Date.now() - sixDays).toISOString().slice(0, -5);
    const today = new Date().toISOString().slice(0, -5);
    searchParams = `q=${encodeURIComponent(q)}&from=${from}&to=${today}&`;
  }

  return fetch(BASE_URL + '/news?' + searchParams + 'page=' + page)
    .then(confirm)
}
