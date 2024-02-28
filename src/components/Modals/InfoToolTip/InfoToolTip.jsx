import Modal from '../Modal/Modal.jsx'
import './InfoToolTip.css'

export default function InfoToolTip({isOpen}) {
  return <Modal isOpen={isOpen}>
    <div className="modal__content info-tooltip">
      <h3 className="modal__title">¡El registro se ha completado con éxito!</h3>
      <button type='button' className='info-tooltip__btn info-tooltip__btn'>Inscribirse</button>
    </div>
  </Modal>
}