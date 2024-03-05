import { useModalContext } from '../../../hooks/useGlobalContext.js'
import Modal from '../Modal/Modal.jsx'
import './InfoToolTip.css'

export default function InfoToolTip() {
  const {infoToolTip, openPopup, closeAllPopups} = useModalContext()

  return <Modal isOpen={infoToolTip}>
    <div className="modal__content info-tooltip">
      <h3 className="modal__title">¡El registro se ha completado con éxito!</h3>
      <button onClick={() => {closeAllPopups(); openPopup('signIn')}} type='button' className='info-tooltip__btn info-tooltip__btn'>Iniciar sesión</button>
    </div>
  </Modal>
}