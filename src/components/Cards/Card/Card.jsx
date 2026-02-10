import { useState } from 'react';
import './Card.css';

export default function Card({
  children,
  urlToImage,
  source: {name},
  title,
  publishedAt,
  description,
  url,
}) {
  const [formatedDate] = useState(() => new Intl.DateTimeFormat('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(publishedAt)))

  return (
  <li className='news-card'>
    <figure className='news-card__figure'>
      <img src={urlToImage} alt="noticia" className="news-card__image" />
      {children}
    </figure>
    <p className="news-card__date">{formatedDate}</p>
    <h3 className="news-card__title">{title}</h3>
    <p className="news-card__text">{description}</p>
    <a href={url} className="news-card__cite">{name}</a>
  </li>
  )
}