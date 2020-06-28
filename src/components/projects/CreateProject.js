import React, { useState } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useFirestore } from "react-redux-firebase";
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

export function CreateProject() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const firestore = useFirestore();
  const profile = useSelector(state => state.firebase.profile)
  const uid = useSelector(state => state.firebase.auth.uid)
  const history = useHistory();
  useFirestoreConnect([{ collection: "projects" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      firestore.collection("projects").add({
        title: title,
        content: content,
        authorId: uid,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: new Date(),
      });
      history.push('/')
    } catch (err) {
      console.log("something bad happened", err);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            name=""
            id="content"
            className="materialize-textarea"
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;
