import { sixDays } from "./const"
const BASE_URL = 'https://newsapi.org/v2/everything?'
const headers = {
  'Authorization': '8797cfa321a4472ebc1dcaf4f1c53a9d',
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
    searchParams = `q=${q.replaceAll(' ', '+')}&from=${from}&to=${today}&pageSize=3&language=es&`
  }

  return fetch(BASE_URL + searchParams + 'page=' + page, {headers})
    .then(confirm)
}