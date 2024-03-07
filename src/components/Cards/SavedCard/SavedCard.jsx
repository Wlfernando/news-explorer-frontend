import { useState } from 'react'
import CardWithMenu from '../CardWithMenu/CardWithMenu.jsx'
import './SavedCard.css'
import { useUpdatedContext } from '../../../hooks/useGlobalContext.js';

export default function SavedCard(props) {
  const [clicked, setClicked] = useState(false);
  const update = useUpdatedContext()

  function clickTrash() {
    setClicked(!clicked)
  }

  function clickRemove() {
    update()
      .remove(props.title)
  }

  return (
  <CardWithMenu {...props}>
    <menu className='saved-card__menu'>
      <button type='button' className='saved-card__button'>Naturaleza</button>
      <button onClick={clickRemove} inert={clicked ? undefined : 'true'} type="button" className={`saved-card__button saved-card__button-delete${clicked ? '' : ` saved-card__button_hide`}`}>Borrar</button>
      <button onClick={clickTrash} type="button" className='saved-card__button saved-card__button_icon_trash' />
    </menu>
  </CardWithMenu>
  )
}