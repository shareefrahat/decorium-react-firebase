import React from "react";
import Cart from "../../components/Cart/Cart";

const Orders = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = product.shipping;
  }
  const tax = parseFloat((total * 0.05).toFixed(2));
  const grandTotal = total + tax + shipping;
  return (
    <div>
      <h3 className="inline-block text-xl font-bold my-5 bg-yellow-400 px-10 py-2 rounded-md">
        Order Review
      </h3>
      <div className="flex flex-col-reverse px-4 md:px-0 m-0 md:flex-row justify-around gap-5">
        <div>
          <h4 className="inline-block text-md font-bold my-5 bg-yellow-400 px-5 py-2 rounded-md">
            Your Cart Items
          </h4>
          {cart.length === 0 ? (
            <p className="text-md text-gray-700">Your cart is empty!</p>
          ) : (
            <div>
              {cart.map((product) => (
                <Cart product={product} key={product.id}></Cart>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 className="inline-block text-md font-bold my-5 bg-yellow-400 px-5 py-2 rounded-md">
            Your Costing
          </h4>
          {cart.length === 0 ? (
            <p className="text-md text-gray-700">No items added to calculate</p>
          ) : (
            <div className="shadow-lg border border-yellow-500 rounded-md text-md flex flex-col items-start gap-4 p-5">
              <p>Total Product: {cart.length}</p>
              <p>Total Price: ${total}</p>
              <p>Tax: ${tax} (5%)</p>
              <p>Shipping: ${shipping} </p>
              <p>
                <span className="font-semibold">Grand Total:</span> $
                {grandTotal}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
