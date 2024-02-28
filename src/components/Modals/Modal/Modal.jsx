import './Modal.css'

export default function Modal({children, isOpen}) {
  return <div className={`modal${isOpen ? ' modal_open' : ''}`} inert={!isOpen}>
    {children}
  </div>
}