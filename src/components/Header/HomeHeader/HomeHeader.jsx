import HeaderWithTools from '../HeaderWithTools/HeaderWithTools.jsx';
import SearchForm from '../../SearchForm/SearchForm.jsx';
import './HomeHeader.css';

export default function HomeHeader() {
  return (
  <HeaderWithTools classMod={'home'}>
    <SearchForm />
  </HeaderWithTools>
  )
}