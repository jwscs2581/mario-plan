import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  const { title, authorFirstName, authorLastName, createdAt } = project;
  const displayDate = createdAt ? createdAt.toDate() : new Date();
  
  return (
    <div className="card z depth-0 project-summary">
      <div className="card-content grey-text text-dark-3">
        <span className="card-title">{title}</span>
        <p>{`Posted by ${
          authorFirstName ? `${authorFirstName} ${authorLastName}` : "Unknown"
        }`}</p>
        <p className="grey-text">{moment(displayDate).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
