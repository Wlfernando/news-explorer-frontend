import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import SearchedNews from '../SearchedNews/SearchedNews.jsx';
import './SearchResults.css';
import Loader from '../../Loader/Loader.jsx';
import { useState } from 'react';
import { useTotalPagesContext, useUpdatedContext } from '../../../hooks/useGlobalContext.js';

export default function SearchRsults({
  news,
}) {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(2)
  const update = useUpdatedContext()
  const total = useTotalPagesContext()

  function click() {
    setLoading(true)

    update()
      .passPage(page)
      .finally(() => {
        setLoading(false)
        setPage(page + 1)
      })
  }

  return (
  <section className='search-results'>
    <h2 className="search-results__title">Resultados de la Búsqueda</h2>
    <NewsCardList>
      {news.map((n) => <SearchedNews key={n.title} {...n}/>)}
    </NewsCardList>
    {news.length < total && <button type="button" className='search-results__button' onClick={click}>
      {loading ? <Loader className={'search-results__loader'}/> : 'Ver más'}
    </button>}
  </section>
  )
}