import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import moment from 'moment'
const Notifications = ({}) => {
  useFirestoreConnect(["notifications"]);
  // useFirestoreConnect("projects");
  const notifications = useSelector(
    (state) => state.firestore.ordered.notifications
  );
  console.log(notifications);
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map((item) => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.content}</span>
                    <div className="grey-text note-date">
                        {moment(item.time.toDate()).from()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
