import { createContext, useContext, useState } from "react";
import useModal from "./useModal";

const ModalContext = createContext({})

export const GlobalContextProvider = ({children}) => {
  const [{signIn, signUp, infoTooltip}, openPopup, closeAllPopups] = useModal('signIn', 'signUp', 'infoToolTip');

  return <ModalContext.Provider value={{signIn, signUp, infoTooltip, openPopup, closeAllPopups}}>
    {children}
  </ModalContext.Provider>
}

export const useModalContext = () => useContext(ModalContext)