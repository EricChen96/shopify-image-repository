import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../util/authContext";

// A wrapper for <Route> that redirects to the login screen if you're not yet
// authenticated. Takes the same props as a Route component from react-router.
function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  console.log(auth.isLoggedIn);
  return (
    <Route {...rest}>
      {auth.isLoggedIn === true ? children : <Redirect to="/login" />}
    </Route>
  );
}

export default PrivateRoute;
