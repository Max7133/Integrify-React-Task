import React from "react";
import { Button } from "./Button";

export const UserCard = (props) => {
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
              <Button userId={user.id} />
            </div>
          </div>
        ))
      ) : (
        <div>EMPTY</div>
      )}
    </div>
  );
};
