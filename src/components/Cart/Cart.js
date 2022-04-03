import React from "react";

const Cart = ({ product }) => {
  const { name, img, price, seller } = product;
  return (
    <div>
      <div className="flex flex-row border justify-between items-center border-yellow-500 rounded-md gap-x-4 p-3 my-5 shadow-lg">
        <div>
          <img className="w-16" src={img} alt="" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <h4 className="text-md font-semibold">{name}</h4>
          <h4 className="text-md text-gray-500">{seller}</h4>
          <p className="text-red-600 font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
