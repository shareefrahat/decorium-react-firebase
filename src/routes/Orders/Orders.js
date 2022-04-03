import React from "react";
import Cart from "../../components/Cart/Cart";

const Orders = ({ cart }) => {
  let total = 0;

  for (const product of cart) {
    total = total + product.price;
  }

  const tax = parseFloat((total * 0.05).toFixed(2));
  const grandTotal = total + tax;
  return (
    <div>
      <h1 className="mt-5 text-3xl">Order Review</h1>
      <div className="flex flex-col-reverse md:flex-row justify-around gap-5">
        <div>
          <h1>List of Product</h1>
          {cart.map((product) => (
            <Cart product={product} key={product.id}></Cart>
          ))}
        </div>

        <div>
          <p>Total Product {cart.length}</p>

          <p>Total Price: {total}</p>
          <p>Tax: {tax} (5%)</p>
          <p>Grand Total {grandTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
