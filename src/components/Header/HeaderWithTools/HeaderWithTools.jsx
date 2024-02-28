import './HeaderWithTools.css'
import Navigation from '../../Navigation/Navigation.jsx';
import { useState } from 'react';

export default function HeaderWithTools({
  children,
  classMod,
}) {
  const openMenu = useState(false);

  return <header className={`header header_route_${classMod} ${openMenu[0] ?" header_shadow" : ""}`}>
    <h1 className="header__title">NewsExplorer</h1>
    <Navigation onOpen={openMenu} />
    <hr className='header__line' />
    {children}
  </header>
}