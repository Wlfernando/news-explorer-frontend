import logout from '../../images/Union.svg';
import './Navigation.css';

export default function Navivation() {
  const isLog = Boolean(localStorage.getItem('email'));
  const imgBtn = isLog ? <img className='navigation__logout-icon' src={logout} alt="logout" /> : undefined;
  const txtBtn = isLog ? 'Fer ' : 'Iniciar sesión';

  return <menu className='navigation__menu'>
    <nav>
      <ul className='navigation__list'>
        <li>Inicio</li>
        {isLog && <li>Articulos guardados</li>}
      </ul>
    </nav>
    <button type="button" className='button'>{txtBtn}{imgBtn}</button>
  </menu>
}