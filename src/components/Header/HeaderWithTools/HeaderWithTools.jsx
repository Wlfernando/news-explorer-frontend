import './HeaderWithTools.css'
import Navigation from '../../Navigation/Navigation.jsx';
import { useState } from 'react';

export default function HeaderWithTools({
  children,
  classMod,
}) {
  const hamburgerBtnState = useState(false);
  const [isOpen] = hamburgerBtnState;

  return (
  <header className={`header header_route_${classMod} ${isOpen ?" header_shadow" : ""}`}>
    <h1 className={`header__title${isOpen ? ' header__title_open' : ''}`}>NewsExplorer</h1>
    <Navigation onOpen={hamburgerBtnState} classMod={classMod} />
    <hr className='header__line' />
    {children}
  </header>
  )
}