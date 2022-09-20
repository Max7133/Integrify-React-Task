import React from "react";
import { useNavigate } from "react-router-dom";

export const UserCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="grid-container">
      {props.userList ? (
        props.userList.map((user) => (
          <div className="grid-item" key={user.id}>
            <div className="avatar">
              <p>{user.name[0]}</p>
            </div>
            <div>{user.name}</div>
            <div>
              <i>@{user.username}</i>
            </div>
            <div>
              <a href={user.website}>http://{user.website}</a>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate(`./single-user/${user.id}`); // navigates to SingleUser page
                }}
              >
                MORE DETAILS
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>EMPTY</div>
      )}
    </div>
  );
};
