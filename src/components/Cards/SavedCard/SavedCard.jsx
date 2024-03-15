import { useState } from 'react'
import CardWithMenu from '../CardWithMenu/CardWithMenu.jsx'
import './SavedCard.css'
import { useUpdatedContext } from '../../../hooks/useGlobalContext.js';

export default function SavedCard(props) {
  const [clicked, setClicked] = useState(false);
  const update = useUpdatedContext()
  const format = {
    ...props,
    description: props.text,
    publishedAt: props.date,
    source: {name: props.source}
  }

  function clickTrash() {
    setClicked(!clicked)
  }

  function clickRemove() {
    update()
      .removeFromSaved(props._id)
  }

  return (
  <CardWithMenu {...format}>
    <menu className='saved-card__menu'>
      <button type='button' className='saved-card__button'>{props.keyWord}</button>
      <button onClick={clickRemove} inert={clicked ? undefined : 'true'} type="button" className={`saved-card__button saved-card__button-delete${clicked ? '' : ` saved-card__button_hide`}`}>Borrar</button>
      <button onClick={clickTrash} type="button" className='saved-card__button saved-card__button_icon_trash' />
    </menu>
  </CardWithMenu>
  )
}