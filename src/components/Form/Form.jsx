import { useState } from 'react';
import './Form.css';
import Loader from '../Loader/Loader';

export default function Form({name, className, onSubmit, children, btnTxt, modBtn, onChange, validate, isLoading}) {
  const [disabled, setDisabled] = useState(validate);

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(e, ()=> setDisabled(validate))
  }

  function handleValidation(e) {
    const
      form = e.currentTarget.elements,
      isValid = Array
        .from(form)
        .every(input => input.validity.valid)

    setDisabled(!isValid)

    if(onChange && typeof onChange === 'function') onChange(e)
  }

  return (
  <form className={className} name={name} noValidate onSubmit={handleSubmit} onChange={handleValidation}>
    {children}
    <button
      className={`form__button${modBtn ? ' form__button_type_' + modBtn : ''}`}
      disabled={disabled}
      type="submit" >{isLoading ? <Loader className={'form__loader'}/> : btnTxt}
    </button>
  </form>
  )
}