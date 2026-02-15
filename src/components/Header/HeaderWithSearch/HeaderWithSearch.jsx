import Header from '../Header/Header.jsx';
import SearchForm from '../../SearchForm/SearchForm.jsx';
import './HeaderWithSearch.css';

export default function HeaderWithSearch() {
  return (
  <Header classMod={'home'}>
    <SearchForm />
  </Header>
  )
}