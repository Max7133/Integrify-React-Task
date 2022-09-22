import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/api";

export const SingleUser = () => {
  const { id } = useParams(); // getting the User ID from URL
  const [singleUser, setSingleUser] = useState(); // [get, set]

  const fetchSingleUserInfo = async () => {
    // fetching Single User by using User ID
    try {
      const res = await fetch(`${api}/${id}`); // fetching the Data from the API
      if (res.status === 200) {
        const data = await res.json(); // parsing the data to JSON
        setSingleUser(data); // 1 User data
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // whenever the ID changes, it will update the page
    if (id) fetchSingleUserInfo();
  }, [id]);

  return (
    <div className="single-container">
      {singleUser ? (
        <div key={singleUser?.id}>
          <p>- name: {singleUser?.name}</p>
          <p>- username: {singleUser?.username}</p>
          <p>- email: {singleUser?.email}</p>
          <p>- phone: {singleUser?.phone}</p>
          <p>- company: {singleUser?.company?.name}</p>
          <p>- website: {singleUser?.website}</p>
          <p>
            - address:
            <li>street: {singleUser?.address?.street}</li>
            <li>suite: {singleUser?.address?.suite}</li>
            <li>city: {singleUser?.address?.city}</li>
            <li>zipcode: {singleUser?.address?.zipcode}</li>
          </p>
        </div>
      ) : (
        <div>NO USER EXISTS</div>
      )}
    </div>
  );
};
