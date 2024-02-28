import NewsCardList from '../Cards/NewsCardList/NewsCardList.jsx';
import SearchedNews from '../SearchedNews/SearchedNews.jsx';
import './SearchResults.css';

export default function SearchRsults() {
  return <section className='search-results'>
    <h2 className="search-results__title">Resultados de la Búsqueda</h2>
    <NewsCardList>
      {Array(5).fill(<SearchedNews />)}
    </NewsCardList>
    <button type="button" className='search-results__button'>Ver más</button>
  </section>
}