import './Footer.css';
import github from '../../images/github.svg';
import linkedIn from '../../images/linkedin.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Footer() {
  return <footer className='footer'>
    <h3 className="footer__copyright">&copy;2024 Supersite, Powered by News API</h3>
    <address className='footer__address'>
      <Link to="/" className="footer__link">Inicio</Link>
      <a href="https://tripleten.com/es-mex/" className="footer__link">Tripleten</a>
      <a href='https://github.com/Wlfernando'><img src={github} alt="github" className='footer__icon'/></a>
      <a href='https://www.linkedin.com/in/fernando-alc%C3%A1zar-malfav%C3%B3n-44b536262/'><img src={linkedIn} alt="linkedin" className='footer__icon'/></a>
    </address>
  </footer>
}