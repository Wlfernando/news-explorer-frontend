const BASE_URL = 'http://localhost:3001'

function setHeaders() {
  return {
    "Authorization": `Bearer ${localStorage.getItem('token')}`,
    "Content-Type": "application/json"
  }
}

async function confirm(res) {
  if (res.ok) return res.json();

  const err = await res.json();

  if ('validation' in err) {
    return Promise.reject(err.validation.body.message)
  }

  return Promise.reject(err.message)
}

export function identify(body) {
  const endpoint = Object.hasOwn(body, 'name')
    ? '/signup'
    : '/signin';

  return fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  .then(confirm);
};

export function getUser() {
  return fetch(BASE_URL + '/users/me', {
    headers: setHeaders(),
  })
  .then(confirm);
};