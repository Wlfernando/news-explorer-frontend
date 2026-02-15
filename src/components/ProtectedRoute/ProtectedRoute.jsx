import { Route, Redirect } from "react-router-dom";
import { useAccessContext, useModalContext } from "../../hooks/useGlobalContext";

export default function ProtectedRoute({
  children,
  ...props
}) {
  const
    haveAccess = useAccessContext(),
    { openPopup } = useModalContext();

  return (
    <Route {...props}>
      {haveAccess ? children : (openPopup('signIn'), <Redirect to={'/'} />)}
    </Route>
  )
}