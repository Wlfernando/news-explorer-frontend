import './Modal.css'

export default function Modal({children, isOpen}) {
  return (
  <div className={`modal${isOpen ? ' modal_open' : ''}`} inert={!isOpen ? 'true' : undefined}>
    {children}
    <button type='button' className='modal__closer' />
  </div>
  )
}