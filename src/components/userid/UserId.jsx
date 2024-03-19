import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserId = () => {
  const navigate = useNavigate();
  const user = useLoaderData();
  const { name, website } = user;
  const handleGoback = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>User id {name} </h3>
      <h3> website: {website} </h3>
      <button onClick={handleGoback}>Go back</button>
    </div>
  );
};

export default UserId;
