import './NewsCard.css';

export default function NewsCard({
  children,
  urlToImage,
  source: {name},
  title,
  publishedAt,
  description,
}) {
  const formatDate = new Intl.DateTimeFormat('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(publishedAt))

  return <li className='news-card'>
    <figure className='news-card__figure'>
      <img src={urlToImage} alt="" className="news-card__image" />
      {children}
    </figure>
    <p className="news-card__date">{formatDate}</p>
    <h3 className="news-card__title">{title}</h3>
    <p className="news-card__text">{description}</p>
    <cite className="news-card__cite">{name}</cite>
  </li>
}