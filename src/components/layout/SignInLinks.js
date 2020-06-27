import React from "react";
import { NavLink } from "react-router-dom";
import { useFirebase} from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const SignedInLinks = () => {
  const firebase = useFirebase();
  const history = useHistory();

  function logout() {
    firebase.logout().then(() => history.push("/"));
  }

  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={logout}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
