import './NewsCard.css';
import image from '../../images/image_08.jpg'

export default function NewsCard({children}) {
  return <li className='news-card'>
    <figure className='news-card__figure'>
      <img src={image} alt="" className="news-card__image" />
      {children}
    </figure>
    <p className="news-card__date">4 de noviembre de 2020</p>
    <h3 className="news-card__title">Todo el mundo necesita un lugar de reflexión en la naturaleza.</h3>
    <p className="news-card__text">Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea de tener un "lugar de reflexión" especial para mi se me ha quedado grabada. Este consejo, que...</p>
    <cite className="news-card__cite">treehugger</cite>
  </li>
}