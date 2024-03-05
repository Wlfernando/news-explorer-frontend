import NewsCardList from '../NewsCardList/NewsCardList.jsx';
import SearchedNews from '../../SearchedNews/SearchedNews.jsx';
import './SearchResults.css';
import Loader from '../../Loader/Loader.jsx';

export default function SearchRsults({
  isLoading,
}) {
  return <section className='search-results'>
    <h2 className="search-results__title">Resultados de la Búsqueda</h2>
    <NewsCardList>
      {Array(5).fill(<SearchedNews />)}
    </NewsCardList>
    <button type="button" className='search-results__button'>
      {isLoading ? <Loader className={'search-results__loader'}/> : 'Ver más'}
    </button>
  </section>
}