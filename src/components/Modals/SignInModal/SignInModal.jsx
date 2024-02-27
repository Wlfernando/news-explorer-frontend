import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './SignInModal.css';

export default function SignInModal({isOpen}) {
  return <ModalWithForm
    isOpen={isOpen}
    title={'Iniciar sesión'}
    formClass={'form-sign-in'}
    paragraph={''}
  >
    <label for='email' className='form-sign-in__label'>Correo eletrónico</label>
    <input
      className='form-sign-in__item'
      placeholder='Introduce tu correo eletrónico'
      type='email'
      name='email'
      required
      minLength='2'
      maxLength='30'
    />
    <span className='form-sign-in__error'></span>
    <label for='password' className='form-sign-in__label'>Contraseña</label>
    <input
      className='form-sign-in__item'
      placeholder='Introduce tu contraseña'
      type='password'
      name='password'
      required
      minLength='4'
    />
    <span className='form-sign-in__error'></span>
    <span className="form-sign-in__error"></span>
  </ModalWithForm>
}