import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`./single-user/${props.userId}`); // navigates to SingleUser page
      }}
    >
      MORE DETAILS
    </button>
  );
};
