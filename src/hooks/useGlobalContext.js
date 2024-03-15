import { createContext, useContext, useEffect, useState } from "react";
import useModal from "./useModal";
import { getNews } from '../utils/NewsApi.js'
import { signin, signup } from "../utils/auth.js";
import { deleteNotice, getNotices, getUser, postNotice } from "../utils/MainApi.js";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";

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
    [keyWord, setKeyWord] = useState(''),
    [savedNews, setSavedNews] = useState([]),
    { pathname } = useLocation();

  useEffect(() => {
    if (Boolean(localStorage.getItem('token'))) {
      getUser()
        .then(setUser)
        .catch(console.error)
    }
  }, [])

  useEffect(() => {
    if (pathname === '/saved-news') {
      getNotices()
        .then(setSavedNews)
        .catch(console.error)
    }
  }, [pathname])

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

    function removeFromSaved(id) {
      deleteNotice(id)
        .then(() => {
          setSavedNews((prev) => {
            return prev.filter(item => id !== item._id)
          })
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
      removeFromSaved,
      exit,
      addNotice,
      removeNotice,
    }
  }

  return <ModalContext.Provider value={{signIn, signUp, infoToolTip, openPopup, closeAllPopups}}>
    <UserContext.Provider value={user}>
      <UpdatedContext.Provider value={update}>
        <FetchedNewsContext.Provider value={{news, savedNews}}>
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
export const useFetchedNewsContext = () => useContext(FetchedNewsContext)
export const useTotalPagesContext = () => useContext(TotalPagesContext)