import { createContext, useContext, useEffect, useState } from "react";
import useModal from "./useModal";
import { getNews } from '../utils/NewsApi.js'
import { signin, signup } from "../utils/auth.js";
import { deleteNotice, getUser, postNotice } from "../utils/MainApi.js";

const ModalContext = createContext({})
const UserContext = createContext({})
const UpdatedContext = createContext({})
const FetchedNewsContext = createContext([])
const TotalPagesContext = createContext({})

export const GlobalContextProvider = ({children}) => {
  const
    [{signIn, signUp, infoToolTip}, openPopup, closeAllPopups] = useModal('signIn', 'signUp', 'infoToolTip'),
    [user, setUser] = useState({}),
    [news, setNews] = useState([]),
    [total, setTotal] = useState(0),
    [keyWord, setKeyWord] = useState('');

  useEffect(() => {
    if (Boolean(localStorage.getItem('token'))) {
      getUser()
        .then(setUser)
        .catch(console.error)
    }
  }, [])

  function update() {
    function handleSearch(query) {
      if(news.length) setNews([])
      setKeyWord(query)

      return getNews({q: query})
        .then(({totalResults, articles}) => {
          if (!totalResults) {
            return Promise.reject('No hay resultados')
          }

          setTotal(totalResults)
          setNews(articles)
        })
    }

    function passPage(page) {
      return getNews({page})
        .then((res) => {
          setNews((prev) => [...prev, ...res.articles])
        })
    }

    function register(form) {
      return signup(form)
        .then(() => {
          closeAllPopups();
          openPopup('infoToolTip');
        })
    }

    function access(form) {
      return signin(form)
        .then(setUser)
        .then(() => {
          closeAllPopups();
        })
    }

    function remove(title) {
      setNews((prev) => {
        return prev.filter(item => title !== item.title)
      })
    }

    function exit() {
      setUser({})
      localStorage.removeItem('token')
    }

    function addNotice(form) {
      form.keyWord = keyWord

      return postNotice(form)
        .then(({_id}) => _id)
    }

    function removeNotice(id) {
      return deleteNotice(id)
    }

    return {
      handleSearch,
      passPage,
      register,
      access,
      remove,
      exit,
      addNotice,
      removeNotice,
    }
  }

  return <ModalContext.Provider value={{signIn, signUp, infoToolTip, openPopup, closeAllPopups}}>
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