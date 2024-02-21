import './Header.css'
import Navigation from '../Navigation/Navigation.jsx';

export default function Header() {

  return <header className="header header_history_main">
    <div className="header__nav">
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation />
    </div>
    
  </header>
}