import { useState } from 'react';
import { useModalContext } from '../../../hooks/useGlobalContext'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './SignUpModal.css'
import useForm from '../../../hooks/useForm';

export default function SignUpModal() {
  const {signUp, openPopup, closeAllPopups} = useModalContext();
  const [title] = useState('Regístrate');
  const {inputs: {email, password, name}, handleChange} = useForm(title);

  return (
  <ModalWithForm
    isOpen={signUp}
    title={title}
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
      value={email?.value ?? ''}
      onChange={handleChange}
    />
    <span className='modal__error'>{email?.hasMssg ? email.validationMessage : ''}</span>
    <label htmlFor='password' className='modal__label'>Contraseña</label>
    <input
      className='modal__item'
      placeholder='Introduce tu contraseña'
      type='password'
      name='password'
      required
      minLength='4'
      value={password?.value ?? ''}
      onChange={handleChange}
    />
    <span className='modal__error'>{password?.hasMssg ? password.validationMessage : ''}</span>
    <label htmlFor='name' className='modal__label'>Nombre de usuario</label>
    <input
      className='modal__item'
      placeholder='Introduce tu nombre de usuario'
      type='text'
      name='name'
      required
      minLength='4'
      value={name?.value ?? ''}
      onChange={handleChange}
    />
    <span className='modal__error'>{name?.hasMssg ? name.validationMessage : ''}</span>
    <span className="modal__error"></span>
    <p className='modal__link modal__link_type_sign-up'>o
      <button type='button' onClick={()=> {closeAllPopups(); openPopup('signIn')}}>inicia sesión</button>
    </p>
  </ModalWithForm>
  )
}