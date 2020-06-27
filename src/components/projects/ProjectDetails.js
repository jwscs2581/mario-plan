import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  useFirestoreConnect([
    {
      collection: "projects",
      doc: id,
    },
  ]);
  const project = useSelector(
    ({ firestore: { data } }) => data.projects && data.projects[id]
  );

  return (
    <>
      {project ? (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">
                Project Title - {project.title}
              </span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>{`Posted by ${
                project.authorFirstName
                  ? `${project.authorFirstName} ${project.authorLastName}`
                  : "Unknown"
              }`}</div>
              <div>May 5th, 3am</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
