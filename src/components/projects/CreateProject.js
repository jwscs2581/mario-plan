import React, { useState } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useFirestore } from "react-redux-firebase";

export function CreateProject() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const firestore = useFirestore();

  useFirestoreConnect([{ collection: "projects" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      firestore.collection("projects").add({
        title: title,
        content: content,
        authorId: 12345,
        authorFirstName: "Rusty",
        authorLastName: "ShackledFord",
        createdAt: new Date(),
      });
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
