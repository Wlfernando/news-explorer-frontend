import { useState } from "react";
import Form from "../Form/Form";
import './SearchBar.css'
import { useUpdatedContext } from "../../hooks/useGlobalContext";

export default function SearchBar() {
  const
    [error, setError] = useState(undefined),
    [input, setInput] = useState(''),
    [loading, setLoading] = useState(false),
    update = useUpdatedContext();

  function submit() {
    if (!input) {
      setError('Por favor, introduzca una palabra clave')
      return null
    }
    setLoading(true)

    update()
      .handleSearch(input)
      .catch((e) => {
        setInput('')
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function change(e) {
    setInput(e.target.value)
  }

  return (
  <Form
    name="buscar"
    btnTxt="Buscar"
    className="form"
    modBtn='search'
    onSubmit={submit}
    isLoading={loading}
    >
    <input
      className={"form__search" + (Boolean(error) ? ' form__search_error' : '')}
      type="text"
      placeholder={error ?? "Introduce un tema"} name="search"
      onChange={change}
      value={input}
    />
  </Form>
  )
}