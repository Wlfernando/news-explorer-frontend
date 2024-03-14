import { useUserContext } from '../../hooks/useGlobalContext';
import './NewsInfo.css';

export default function NewsInfo() {
  const { name } = useUserContext()

  return (
  <section className='news-info'>
    <h2 className="news-info__title">Artículos guardados</h2>
    <p className="news-info__dashboard">{name}, tienes ... articulos guardados</p>
    <p className='news-info__text'>Por palabras clave: <span className='news-info__key-words'>Naturaleza, Yellowstone, y 2 más</span></p>
  </section>
  )
}