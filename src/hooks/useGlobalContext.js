import { createContext, useContext, useState } from "react";
import useModal from "./useModal";
import { getNews } from '../utils/NewsApi.js'

const ModalContext = createContext({})
const UserContext = createContext({})
const UpdatedContext = createContext({})
const FetchedNewsContext = createContext([])

export const GlobalContextProvider = ({children}) => {
  const [{signIn, signUp, infoTooltip}, openPopup, closeAllPopups] = useModal('signIn', 'signUp', 'infoToolTip');
  const [user] = useState({});
  const [news, setNews] = useState([]);

  function update() {
    function handleSearch(q) {
      if(news.length)  setNews([])

      return getNews({q})
        .then(setNews)
    }

    function handlePage(page) {
      return getNews({page})
        .then((res) => {
          setNews((prev) => [...prev, ...res])
          return res
        })
    }

    return {
      handleSearch,
      handlePage
    }
  }

  return <ModalContext.Provider value={{signIn, signUp, infoTooltip, openPopup, closeAllPopups}}>
    <UserContext.Provider value={user}>
      <UpdatedContext.Provider value={update}>
        <FetchedNewsContext.Provider value={news}>
          {children}
        </FetchedNewsContext.Provider>
      </UpdatedContext.Provider>
    </UserContext.Provider>
  </ModalContext.Provider>
}

export const useModalContext = () => useContext(ModalContext)
export const useUserContext = () => useContext(UserContext)
export const useUpdatedContext = () => useContext(UpdatedContext)
export const useFetchedNewsContext =() => useContext(FetchedNewsContext)