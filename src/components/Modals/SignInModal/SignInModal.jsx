import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './SignInModal.css';

export default function SignInModal({isOpen}) {
  return <ModalWithForm
    isOpen={isOpen}
    title={'Iniciar sesión'}
    formClass={'sign-in'}
  >
    <label for='email' className='modal__label sign-in__label_type_email'>Correo eletrónico</label>
    <input
      className='modal__item sign-in__item_type_email'
      placeholder='Introduce tu correo eletrónico'
      type='email'
      name='email'
      required
      minLength='2'
      maxLength='30'
    />
    <span className='modal__error sign-in__error_type_email'></span>
    <label for='password' className='modal__label sign-in__label_type_pass'>Contraseña</label>
    <input
      className='modal__item sign-in__item_type_pass'
      placeholder='Introduce tu contraseña'
      type='password'
      name='password'
      required
      minLength='4'
    />
    <span className='modal__error sign-in__error_type_pass'></span>
    <span className="modal__error sign-in__error_type_form"></span>
  </ModalWithForm>
}