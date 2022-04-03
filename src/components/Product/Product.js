import { ShoppingCartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

import React from "react";

const Product = ({ product, addToCart }) => {
  const { img, name, category, seller, price, ratings } = product;

  let ratingStar;

  if (ratings === 5) {
    ratingStar = (
      <span>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
      </span>
    );
  } else if (ratings === 4.5) {
    ratingStar = (
      <span>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-3 inline"></StarIcon>
      </span>
    );
  } else if (ratings === 4) {
    ratingStar = (
      <span>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline"></StarIcon>
        <StarIcon className="w-4 inline text-gray-400"></StarIcon>
      </span>
    );
  }

  return (
    <section>
      <div className="border border-yellow-500 shadow-md rounded-md">
        <div className="my-5 border-b border-b-yellow-500 py-4">
          <img className="w-[100px] mx-auto " src={img} alt="" />
        </div>
        <div className="flex flex-col gap-2 px-4 mb-4">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-md text-gray-500">{category}</h3>
            <h3 className="text-xl">{name}</h3>
            <h4 className="text-md text-gray-600">{seller}</h4>
            <h4 className="text-md text-red-600 font-semibold">${price}</h4>
          </div>

          <div className="flex flex-row justify-between items-center">
            <h4 className="text-md text-yellow-600 font-semibold">
              {ratings} {ratingStar}
            </h4>
            <div>
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-200 hover:bg-yellow-400 font-thin p-3 text-gray-800  aspect-square rounded-full"
              >
                <ShoppingCartIcon className="w-5"></ShoppingCartIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
