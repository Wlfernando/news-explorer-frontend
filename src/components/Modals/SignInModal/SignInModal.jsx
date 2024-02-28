import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './SignInModal.css';

export default function SignInModal({isOpen}) {
  return <ModalWithForm
    isOpen={isOpen}
    title={'Iniciar sesión'}
    formClass={'sign-in'}
  >
    <label for='email' className='modal__label'>Correo eletrónico</label>
    <input
      className='modal__item'
      placeholder='Introduce tu correo eletrónico'
      type='email'
      name='email'
      required
      minLength='2'
      maxLength='30'
    />
    <span className='modal__error'></span>
    <label for='password' className='modal__label'>Contraseña</label>
    <input
      className='modal__item'
      placeholder='Introduce tu contraseña'
      type='password'
      name='password'
      required
      minLength='4'
    />
    <span className='modal__error'></span>
    <span className="modal__error"></span>
  </ModalWithForm>
}