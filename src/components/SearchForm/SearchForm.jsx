import SearchBar from '../SearchBar/SearchBar.jsx';
import './SearchForm.css'

export default function SearchForm() {
  return <section className='search'>
    <h2 className="search__title">¿Qué está pasando en el mundo?</h2>
    <p className="search__text">Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal.</p>
    <SearchBar />
  </section>
}