import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";

export function SignUp() {
  const auth = useSelector((state) => state.firebase.auth);
  const authError = useSelector((state) => state.firebase.authError);
  const [pw, setPw] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const firebase = useFirebase();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: pw,
      firstName: firstName,
      lastName: lastName,
    };
    firebase
      .createUser(
        { email: email, password: pw },
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          initials: firstName[0] + lastName[0],
        }
      )
  };
  if (isLoaded(auth) && !isEmpty(auth)) return <Redirect to="/" />;
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          <div className="red-text center">
              {authError ? <p>{authError.message}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
