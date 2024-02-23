import Form from "../Form/Form";
import './SearchBar.css'

export default function SearchBar() {
  return <Form name="buscar" btnTxt="Buscar" className="form" modBtn='search'>
    <input className="form__search" type="text" placeholder="Introduce un tema" name="search" />
  </Form>
}