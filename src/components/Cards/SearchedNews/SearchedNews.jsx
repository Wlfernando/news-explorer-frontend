import { useState } from 'react'
import { useModalContext, useUserContext } from '../../../hooks/useGlobalContext.js'
import NewsCard from '../NewsCard/NewsCard.jsx'
import './SearchedNews.css'

export default function SearchedNews(props) {
  const user = useUserContext()
  const {openPopup} = useModalContext()
  const [hasLog, setHasLog] = useState(true)

  function click() {
    if (!Boolean(user.name)) {
      setHasLog(false)
    } else {
      setHasLog(true)
    }
  }

  return <NewsCard {...props}>
    <menu className="searched-news__menu">
      <button
        type="button"
        className={"searched-news__button searched-news__button-sign-in" + (hasLog ? ' searched-news__button_hide' : '')}
        onClick={() => openPopup('signIn')}
        inert={hasLog ? 'true' : undefined}
      >Inicia sesión para guardar artículos
      </button>
      <button
        type="button"
        className={`searched-news__button ${false ? 'searched-news__button_icon_fav' : 'searched-news__button_icon_non-fav'}`}
        onClick={click}
      />
    </menu>
  </NewsCard>
}