import './HambuergerBtn.css'

export default function HambuergerBtn({onOpen: [open, setOpen]}) {
  return <button onClick={() => setOpen(!open)} type='button' className={`hamburger-btn${open ? ' hamburger-btn_active' : ''}`}>
    <div className="hamburger-btn__bar"></div>
    <div className="hamburger-btn__bar"></div>
  </button>
}