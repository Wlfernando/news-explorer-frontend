import './Form.css';

export default function Form({name, className, onSubmit, children, btnTxt, modBtn}) {
  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(e)
  }

  return <form className={className} name={name} noValidate onSubmit={handleSubmit}>
    {children}
    <button className={`form__button${modBtn ? ' form__button_type_' + modBtn : ''}`} type="submit" >{btnTxt}</button>
  </form>
}