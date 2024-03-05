import { createContext, useContext, useState } from "react";
import useModal from "./useModal";

const ModalContext = createContext({})
const UserContext = createContext({})

export const GlobalContextProvider = ({children}) => {
  const [{signIn, signUp, infoTooltip}, openPopup, closeAllPopups] = useModal('signIn', 'signUp', 'infoToolTip');
  const [user] = useState({});

  return <ModalContext.Provider value={{signIn, signUp, infoTooltip, openPopup, closeAllPopups}}>
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  </ModalContext.Provider>
}

export const useModalContext = () => useContext(ModalContext)
export const useUserContext = () => useContext(UserContext)