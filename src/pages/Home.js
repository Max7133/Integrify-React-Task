import React, { useEffect, useState } from "react";
import { api } from "../utils/api";

export const Home = () => {
  const [userList, setUserList] = useState(); // [get, set]
  const fetchUserInfo = async () => {
    const res = await fetch(api);
    if (res.status === 200) {
      const data = await res.json();
      setUserList(data);
    }
    console.log(userList);
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <div>
      {userList.map((c) => (
        <div>
          <div>{c.name[0]}</div>
          <div>{c.name}</div>
          <div>{c.username}</div>
          <div>{c.website}</div>
          <div>
            <button>MORE DETAILS</button>
          </div>
        </div>
      ))}
    </div>
  );
};
