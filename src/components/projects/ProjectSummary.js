import React from 'react';

const ProjectSummary = ({project}) => {
    const {title, authorFirstName, authorLastName, createdAt} = project;

    const displayDate = createdAt ? new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 100000): new Date();
    return (
        <div className="card z depth-0 project-summary">
            <div className="card-content grey-text text-dark-3">
                <span className="card-title">{title}</span>
                <p>{`Posted by ${authorFirstName ? `${authorFirstName} ${authorLastName}` : 'Unknown'}`}</p>
                <p className="grey-text">{`${displayDate.toDateString()} ${displayDate.toLocaleTimeString('en-US')}`}</p>
            </div>
        </div>
    ) 
}

export default ProjectSummary