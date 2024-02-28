import './HambuergerBtn.css'

export default function HambuergerBtn({
  onOpen: [open, setOpen],
  classMod,
}) {
  const barClass = `hamburger-btn__bar header__hamburger_route_${classMod}${open ? ' header__hamburger_open' : ''}`

  return <button onClick={() => setOpen(!open)} type='button' className={`hamburger-btn${open ? ' hamburger-btn_active' : ''}`}>
    <div className={barClass}></div>
    <div className={barClass}></div>
  </button>
}