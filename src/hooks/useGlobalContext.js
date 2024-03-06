import { createContext, useContext, useState } from "react";
import useModal from "./useModal";
import { getNews } from '../utils/NewsApi.js'
import {cards} from '../utils/info.js'

const ModalContext = createContext({})
const UserContext = createContext({})
const UpdatedContext = createContext({})
const FetchedNewsContext = createContext([])
const TotalPagesContext = createContext({})

export const GlobalContextProvider = ({children}) => {
  const [{signIn, signUp, infoTooltip}, openPopup, closeAllPopups] = useModal('signIn', 'signUp', 'infoToolTip');
  const [user, setUser] = useState({});
  const [news, setNews] = useState(JSON.parse(cards));
  const [total, setTotal] = useState(0)

  function update() {
    function handleSearch(q) {
      if(news.length) setNews([])

      return getNews({q})
        .then((res) => {
          setTotal(res.totalResults)
          setNews(res.articles)
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