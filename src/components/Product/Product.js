import React from "react";

const Product = ({ product, addToCart }) => {
  const { img, name, seller, price, ratings } = product;
  return (
    <section>
      <div className="border border-slate-600 shadow-md">
        <div>
          <img className="w-[100px] mx-auto py-5" src={img} alt="" />
        </div>
        <h3 className="text-xl">{name}</h3>
        <h4 className="text-md">{seller}</h4>
        <h4 className="text-md text-red-700">{price}</h4>
        <h4 className="text-md text-yellow-700">{ratings}</h4>

        <button
          onClick={() => addToCart(product)}
          className=" bg-yellow-400 text-black px-5 py-2 my-4 rounded-md"
        >
          Add To Cart
        </button>
      </div>
    </section>
  );
};

export default Product;
