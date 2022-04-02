import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="mt-5 text-3xl">OPPS! 404 ERROR!</h1>
      <p className="text-3xl">
        Your route{" "}
        <span className="text-red-800">"{window.location.pathname}"</span> is
        not found
      </p>
    </div>
  );
};

export default NotFound;
