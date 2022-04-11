import React from "react";
import Login from "../../components/Login/Login";

const User = () => {
  return (
    <div>
      <h1 className="mt-5 text-3xl">User Information Page</h1>

      <div className="my-5">
        <Login></Login>
      </div>
    </div>
  );
};

export default User;
