import { useState } from 'react'
import { useModalContext, useUpdatedContext, useUserContext } from '../../../hooks/useGlobalContext.js'
import CardWithMenu from '../CardWithMenu/CardWithMenu.jsx'
import './SearchedNews.css'

export default function SearchedNews(props) {
  const user = useUserContext()
  const {openPopup} = useModalContext()
  const [hasLogged, setHasLogged] = useState(true)
  const [id, setId] = useState(undefined)
  const update = useUpdatedContext()
  const hasId = Boolean(id)

  function click() {
    if (!Boolean(user.email)) {
      setHasLogged(false)
    } else if (!hasId) {
      setHasLogged(true)

      update()
        .addNotice({
          title: props.title,
          text: props.description,
          date: props.publishedAt,
          urlToImage: props.urlToImage,
          url: props.url,
        })
        .then(setId)

    } else {
      update()
        .removeNotice(id)
        .then(() => {
          setId(undefined)
        })
    }
  }

  return (
  <CardWithMenu {...props}>
    <menu className="searched-news__menu">
      <button
        type="button"
        className={"searched-news__button searched-news__button-sign-in" + (hasLogged ? ' searched-news__button_hide' : '')}
        onClick={() => openPopup('signIn')}
        inert={hasLogged ? 'true' : undefined}
      >Inicia sesión para guardar artículos
      </button>
      <button
        type="button"
        className={`searched-news__button ${hasId ? 'searched-news__button_icon_fav' : 'searched-news__button_icon_non-fav'}`}
        onClick={click}
      />
    </menu>
  </CardWithMenu>
  )
}