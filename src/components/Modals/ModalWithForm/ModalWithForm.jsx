import Form from '../../Form/Form.jsx';
import './ModalWithForm.css';

export default function ModalWithForm({
  isOpen,
  title,
  children,
  formClass,
  paragraph,
  name,
}) {
  return <div className={`modal${isOpen ? ' modal_open' : ''}`} inert={!isOpen}>
    <Form className={`modal__form ${formClass}`} modBtn={'modal'} btnTxt={title} name={name}>
      <h3 className="modal__title">{title}</h3>
      {children}
    </Form>
    <button type='button' className='modal__closer' />
    {paragraph}
  </div>
}