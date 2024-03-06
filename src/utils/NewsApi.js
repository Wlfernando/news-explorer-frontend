import { sixDays } from "./const"
const BASE_URL = 'https://newsapi.org/v2/everything?'
const headers = {
  'Authorization': process.env.REACT_APP_NEWS_API_KEY,
}
const status = {
  '400': 'Petición equivocada',
  '401': 'No tienes autorización',
  '429': 'Inténtalo más tarde',
  '500': 'Error del servidor',
}

let searchParams = ''

function confirm(res) {
  if (res.ok) return res.json()
  return Promise.reject(status[res.status] ?? 'Ha ocurrido un problema')
}

export function getNews({q, page = 1}) {
  if (q) {
    const from = new Date(Date.now() - sixDays).toISOString().slice(0, -5)
    const today = new Date().toISOString().slice(0, -5)
    searchParams = `q=${q.replaceAll(' ', '_')}&from=${from}&to=${today}&pageSize=3&language=es&`
  }

  return fetch(BASE_URL + searchParams + 'page=' + page, {headers})
    .then(confirm)
    .then(({ articles }) => articles)
}