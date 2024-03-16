import { useFetchedNewsContext, useUserContext } from '../../hooks/useGlobalContext';
import './NewsInfo.css';

export default function NewsInfo() {
  const { name } = useUserContext()
  const { savedNews } = useFetchedNewsContext()
  const length = savedNews.length
  const keyWords = Object.groupBy(savedNews, ({keyWord}) => keyWord)
  const arrWords = Object
    .entries(keyWords)
    .sort(([, valueA], [, valueB]) => valueB.length - valueA.length)

  let text = ''

  switch (arrWords.length) {
    case 0:
      text = 'agrega tarjetas a favoritos.'
      break
    case 1:
      text = `${arrWords[0][0]}.`
      break
    case 2:
      text = `${arrWords[0][0]} y ${arrWords[1][0]}.`
      break
    default:
      text = `${arrWords[0][0]}, ${arrWords[1][0]} y ${arrWords.slice(2).length} más.`
  }

  return (
  <section className='news-info'>
    <h2 className="news-info__title">Artículos guardados</h2>
    <p className="news-info__dashboard">{name}, tienes {length} {length === 1 ? 'articulo guardado' : 'articulos guardados'}.</p>
    <p className='news-info__text'>Por palabras clave: <span className='news-info__key-words'>{text}</span></p>
  </section>
  )
}