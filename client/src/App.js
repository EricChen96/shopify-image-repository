import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UploadPictures from "./components/UploadPictures";

import PublicImages from "./pages/PublicImages";
import PrivateImages from "./pages/PrivateImages";


import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { ProvideAuth } from "./util/authContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Route path={["/uploadPicture", "/privateImages", "/publicImages"]}>
            <Navbar />
          </Route>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <PrivateRoute path="/uploadPicture" exact>
              <UploadPictures />
            </PrivateRoute>
            <PrivateRoute path="/privateImages" exact>
              <PrivateImages></PrivateImages>
            </PrivateRoute>
            <PrivateRoute path="/publicImages" exact>
              <PublicImages></PublicImages>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
