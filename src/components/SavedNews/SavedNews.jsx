import NewsCard from '../NewsCard/NewsCard.jsx'
import './SavedNews.css'

export default function SavedNews() {
  return <NewsCard>
    <menu className='saved-news__menu'>
      <button type='button' className='saved-news__button'>Naturaleza</button>
      <button type="button" className="saved-news__button saved-news__button_dynamic">Borrar</button>
      <button type="button" className='saved-news__button saved-news__button_icon_trash' />
    </menu>
  </NewsCard>
}