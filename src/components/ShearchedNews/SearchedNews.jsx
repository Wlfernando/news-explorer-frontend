import NewsCard from '../NewsCard/NewsCard.jsx'
import './SearchedNews.css'

export default function SearchedNews() {
  return <NewsCard>
    <menu className="searched-news__menu">
      <button type="button" className="searched-news__button searched-news__button_dynamic">Inicia sesión para guardar artículos</button>
      <button type="button" className={`searched-news__button ${false ? 'searched-news__button_icon_fav' : 'searched-news__button_icon_non-fav'}`} />
    </menu>
  </NewsCard>
}