import './Header.css'
import Navigation from '../Navigation/Navigation.jsx';

export default function Header() {

  return <header className="header">
    <h1 className="header__title">NewsExplorer</h1>
    <Navigation />
  </header>
}