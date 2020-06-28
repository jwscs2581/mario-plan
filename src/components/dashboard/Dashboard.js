import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

export default function Dashboard() {
  useFirestoreConnect(["projects", 'notifications']);
  const projects = useSelector((state) => state.firestore.ordered.projects);
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        {/* 12 columns at small 5 and medium, space by 1 column */}
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
}
