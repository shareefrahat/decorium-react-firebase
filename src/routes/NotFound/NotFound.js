import React from "react";
import emoji from "../../images/sad-emoji.gif";

const NotFound = () => {
  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <h4 className=" text-2xl text-red-600">Opps! Wrong Gateway!</h4>
        <img className="mx-auto pb-3 w-40" src={emoji} alt="" />
        <p className="text-xl">
          Your route
          <span className="text-red-600">"{window.location.pathname}"</span> is
          not found!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
