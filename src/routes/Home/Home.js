import React from "react";
import { Link } from "react-router-dom";
import picture from "../../images/hanger.jpg";

const Home = () => {
  return (
    <div className="m-0">
      <section className="flex flex-col md:flex-row justify-around items-center px-5">
        <div>
          <img className="w-[500px]" src={picture} alt="" />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-sans text-red-500 my-10">
            Find Out
            <br />
            The Best Deals
            <br />
            With Us
          </h1>
          <Link
            to="/shop"
            className="text-2xl px-5 py-2 bg-yellow-400 text-black rounded-md shadow-md"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
