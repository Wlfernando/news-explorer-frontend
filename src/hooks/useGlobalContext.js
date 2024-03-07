import { createContext, useContext, useState } from "react";
import useModal from "./useModal";
import { getNews } from '../utils/NewsApi.js'

const ModalContext = createContext({})
const UserContext = createContext({})
const UpdatedContext = createContext({})
const FetchedNewsContext = createContext([])
const TotalPagesContext = createContext({})

export const GlobalContextProvider = ({children}) => {
  const
    [{signIn, signUp, infoTooltip}, openPopup, closeAllPopups] = useModal('signIn', 'signUp', 'infoToolTip'),
    [user, setUser] = useState({}),
    [news, setNews] = useState({}),
    [total, setTotal] = useState(0),
    [, setTag] = useState('');

  function update() {
    function handleSearch(query) {
      if(news.length) setNews([])
      setTag(query)

      return getNews({q: query})
        .then(({totalResults, articles}) => {
          if (!totalResults) {
            return Promise.reject('No hay resultados')
          }

          setTotal(totalResults)
          setNews(articles)
        })
    }

    function handlePage(page) {
      return getNews({page})
        .then((res) => {
          setNews((prev) => [...prev, ...res.articles])
        })
    }

    function sign(user) {
      setUser(user)
      closeAllPopups()
    }

    function remove(title) {
      setNews((prev) => {
        return prev.filter(item => title !== item.title)
      })
    }

    return {
      handleSearch,
      handlePage,
      sign,
      remove,
    }
  }

  return <ModalContext.Provider value={{signIn, signUp, infoTooltip, openPopup, closeAllPopups, setUser}}>
    <UserContext.Provider value={user}>
      <UpdatedContext.Provider value={update}>
        <FetchedNewsContext.Provider value={news}>
          <TotalPagesContext.Provider value={total}>
            {children}
          </TotalPagesContext.Provider>
        </FetchedNewsContext.Provider>
      </UpdatedContext.Provider>
    </UserContext.Provider>
  </ModalContext.Provider>
}

export const useModalContext = () => useContext(ModalContext)
export const useUserContext = () => useContext(UserContext)
export const useUpdatedContext = () => useContext(UpdatedContext)
export const useFetchedNewsContext =() => useContext(FetchedNewsContext)
export const useTotalPagesContext = () => useContext(TotalPagesContext)