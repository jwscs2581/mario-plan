import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom"
import {useSelector} from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

export function SignIn() {
  const auth = useSelector((state) => state.firebase.auth)
  const [pw, setPw] = useState();
  const [email, setEmail] = useState();
  const firebase = useFirebase();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO handle error
    firebase
      .login({ email: email, password: pw })
  };

  if(isLoaded(auth) && !isEmpty(auth)) return <Redirect to="/" /> 
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setPw(event.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
