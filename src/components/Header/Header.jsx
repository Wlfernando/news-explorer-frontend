import './Header.css'
import Navigation from '../Navigation/Navigation.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import { useState } from 'react';

export default function Header() {
  const openMenu = useState(false);

  return <header className={`header header_history_main ${openMenu[0] ?" header_shadow" : ""}`}>
    <h1 className="header__title">NewsExplorer</h1>
    <Navigation onOpen={openMenu} />
    <hr className='header__line' />
    <SearchForm />
  </header>
}