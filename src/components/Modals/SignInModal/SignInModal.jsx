import { useState } from 'react';
import useForm from '../../../hooks/useForm';
import { useModalContext, useUpdatedContext } from '../../../hooks/useGlobalContext';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './SignInModal.css';

export default function SignInModal() {
  const [title] = useState('Iniciar sesión');
  const {signIn, openPopup, closeAllPopups} = useModalContext();
  const {inputs: {email, password}, handleChange, getValues} = useForm(title)
  const update = useUpdatedContext()
  const [error, setError] = useState(undefined)

  function submit() {
    setError(undefined)
    
    update()
      .access(getValues())
      .catch(setError)
  }

  return (
  <ModalWithForm
    isOpen={signIn}
    title={title}
    formClass={'sign-in'}
    onSubmit={submit}
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
    <span className="modal__error">{error}</span>
    <p className='modal__link modal__link_type_sign-in'>o
      <button type='button' onClick={(e)=> {e.preventDefault(); closeAllPopups(); openPopup('signUp')}}>inscríbete</button>
    </p>
  </ModalWithForm>
  )
}