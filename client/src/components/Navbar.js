import { useAuth } from "../util/authContext";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const auth = useAuth();

  const signOut = () => {
    auth.logout();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link nav" activeClassName="active" aria-current="page" to="/publicImages">
                Public Images
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav" activeClassName="active" to="/privateImages">
                Private Images
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav" activeClassName="active" to="/uploadPicture">
                Upload Images
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav" activeClassName="active" to="/login" onClick={signOut}>
                Sign Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
