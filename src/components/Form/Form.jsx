import { useRef, useState } from 'react';
import './Form.css';

export default function Form({name, className, onSubmit, children, btnTxt, modBtn, onChange}) {
  const hasInputs = useRef(Boolean(children))
  const [disabled, setDisabled] = useState(hasInputs.current);

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(e, ()=> setDisabled(hasInputs.current))
  }

  function handleValidation(e) {
    const
      form = e.currentTarget.elements,
      isValid = Array(...form)
        .every(input => input.validity.valid)

    setDisabled(!isValid)

    if(onChange && typeof onChange === 'function') onChange(e)
  }

  return <form className={className} name={name} noValidate onSubmit={handleSubmit} onChange={handleValidation}>
    {children}
    <button
      className={`form__button${modBtn ? ' form__button_type_' + modBtn : ''}`}
      disabled={disabled}
      type="submit" >{btnTxt}
    </button>
  </form>
}