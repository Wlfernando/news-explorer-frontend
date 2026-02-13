import { Route, Redirect } from "react-router-dom";
import { useModalContext } from "../../hooks/useGlobalContext";
import useCookieStore from "../../hooks/useCookieStore";

export default function ProtectedRoute({
  children,
  ...props
}) {
  const
    access = useCookieStore(),
    { openPopup } = useModalContext();

  return (
    <Route {...props}>
      {access ? children : (openPopup('signIn'), <Redirect to={'/'} />)}
    </Route>
  )
}