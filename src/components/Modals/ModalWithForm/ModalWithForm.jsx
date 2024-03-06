import Form from '../../Form/Form.jsx';
import Modal from '../Modal/Modal.jsx';
import './ModalWithForm.css';

export default function ModalWithForm({
  isOpen,
  title,
  children,
  formClass,
  isLoading,
  onSubmit,
}) {
  return <Modal isOpen={isOpen}>
    <Form
      className={`modal__content modal__form_class_${formClass}`} modBtn={'modal'}
      btnTxt={title}
      name={title}
      validate
      isLoading={isLoading}
      onSubmit={onSubmit}
    >
      <h3 className="modal__title">{title}</h3>
      {children}
    </Form>
  </Modal>
}