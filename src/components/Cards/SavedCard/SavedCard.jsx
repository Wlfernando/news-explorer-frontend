import NewsCard from '../NewsCard/NewsCard.jsx'
import './SavedCard.css'

export default function SavedCard() {
  return <NewsCard>
    <menu className='saved-card__menu'>
      <button type='button' className='saved-card__button'>Naturaleza</button>
      <button type="button" className="saved-card__button saved-card__button_dynamic">Borrar</button>
      <button type="button" className='saved-card__button saved-card__button_icon_trash' />
    </menu>
  </NewsCard>
}