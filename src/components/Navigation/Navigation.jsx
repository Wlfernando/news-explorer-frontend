import './Navigation.css';
import useSize from '../../hooks/useSize';
import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import { NavLink } from 'react-router-dom';

export default function Navigation({onOpen, classMod}) {
  const size = useSize();
  const [isOpen] = onOpen;
  const isLog = Boolean(localStorage.getItem('email'));
  const txtBtn = isLog ? 'Fer ' : 'Iniciar sesión';
  const imgBtn = isLog ?
    <svg className={`navigation__logout-icon header__svg_route_${classMod}`}
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z"
        fill=""
      />
    </svg> :
    undefined;

  return <>
    {size !== 'desktop' && <HamburgerBtn onOpen={onOpen} classMod={classMod} />}
    <menu className={`navigation__menu${isOpen ? ' navigation__menu_active' : ''}`}>
      <NavLink to='#' className='navigation__link' >Inicio</NavLink>
      {isLog && <NavLink to='#' className='navigation__link' >Articulos guardados</NavLink>}
      <button type="button" className={`navigation__button header__button_route_${classMod}`}>{txtBtn}{imgBtn}</button>
    </menu>
  </>
}