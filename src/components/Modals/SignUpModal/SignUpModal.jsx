import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './SignUpModal.css'

export default function SignUpModal({isOpen}) {
  return <ModalWithForm
    isOpen={isOpen}
    title={'Regístrate'}
    formClass={'sign-up'}
  >
    <label htmlFor='email' className='modal__label sign-up__label_type_email'>Correo eletrónico</label>
    <input
      className='modal__item sign-up__item_type_email'
      placeholder='Introduce tu correo eletrónico'
      type='email'
      name='email'
      required
      minLength='2'
      maxLength='30'
    />
    <span className='modal__error sign-up__error_type_email'></span>
    <label htmlFor='password' className='modal__label sign-up__label_type_pass'>Contraseña</label>
    <input
      className='modal__item sign-up__item_type_pass'
      placeholder='Introduce tu contraseña'
      type='password'
      name='password'
      required
      minLength='4'
    />
    <span className='modal__error sign-up__error_type_pass'></span>
    <label htmlFor='name' className='modal__label sign-up__label_type_name'>Nombre de usuario</label>
    <input
      className='modal__item sign-up__item_type_name'
      placeholder='Introduce tu nombre de usuario'
      type='text'
      name='name'
      required
      minLength='4'
    />
    <span className='modal__error sign-up__error_type_name'></span>
    <span className="modal__error sign-up__error_type_form"></span>
  </ModalWithForm>
}