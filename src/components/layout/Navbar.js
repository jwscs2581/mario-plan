import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
const Navbar = () => {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {!isLoaded(auth) ? (
          <span>...</span>
        ) : isEmpty(auth) ? (
          <SignedOutLinks />
        ) : (
          <SignInLinks />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
