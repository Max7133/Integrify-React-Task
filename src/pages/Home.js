import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import { UserCard } from "../components/UserCard";

export const Home = () => {
  const [userList, setUserList] = useState(); // [get, set]

  const fetchUserInfo = async () => {
    try {
      const res = await fetch(api);
      if (res.status === 200) {
        const data = await res.json();
        setUserList(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // whenever the page is loaded then it fetch the userlist
    fetchUserInfo();
  }, []);

  return <UserCard userList={userList} />;
};
