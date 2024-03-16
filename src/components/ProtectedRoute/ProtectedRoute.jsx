import { Route, Redirect } from "react-router-dom";
import { useModalContext, useUserContext } from "../../hooks/useGlobalContext";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
  ...props
}) {
  const
    { name } = useUserContext(),
    { openPopup } = useModalContext(),
    isLogged = Boolean(name);

  useEffect(() => {
    if (!isLogged) {
      openPopup('signIn')
    }
  }, [isLogged, openPopup])

  return (
    <Route {...props}>
      {isLogged ? children : <Redirect to={'/'} />}
    </Route>
  )
}