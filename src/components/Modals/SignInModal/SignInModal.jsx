import { useModalContext } from '../../../hooks/useGlobalContext';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './SignInModal.css';

export default function SignInModal() {
  const {signIn, openPopup, closeAllPopups} = useModalContext()

  return <ModalWithForm
    isOpen={signIn}
    title={'Iniciar sesión'}
    formClass={'sign-in'}
  >
    <label htmlFor='email' className='modal__label'>Correo eletrónico</label>
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
    <label htmlFor='password' className='modal__label'>Contraseña</label>
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
    <p className='modal__link modal__link_type_sign-in'>o
      <button type='button' onClick={(e)=> {e.preventDefault(); closeAllPopups(); openPopup('signUp')}}>inscríbete</button>
    </p>
  </ModalWithForm>
}