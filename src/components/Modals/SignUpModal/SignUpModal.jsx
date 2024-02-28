import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './SignUpModal.css'

export default function SignUpModal({isOpen}) {
  return <ModalWithForm
    isOpen={isOpen}
    title={'Regístrate'}
    formClass={'sign-up'}
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
    <label htmlFor='name' className='modal__label'>Nombre de usuario</label>
    <input
      className='modal__item'
      placeholder='Introduce tu nombre de usuario'
      type='text'
      name='name'
      required
      minLength='4'
    />
    <span className='modal__error'></span>
    <span className="modal__error"></span>
  </ModalWithForm>
}