import React from "react";
import logo from "../../images/decorium.png";
import { UserCircleIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white flex flex-col md:flex-row justify-around items-center px-2 md:px-0 py-5 md:py-8 m-0">
      <div className="flex flex-row justify-center items-center my-5 md:my-0">
        <img className="w-10" src={logo} alt="" />
        <h1 className="text-4xl mx-2 text-gray-100">Decorium</h1>
      </div>
      <div className="flex flex-row justify-center items-center my-5 md:my-0">
        <div>
          <input
            className="px-3 py-2 bg-white text-black border  placeholder-slate-400 focus:outline-none focus:border-yellow-500  block w-full md:w-[500px] rounded-full sm:text-sm focus:ring-1"
            type="text"
            name=""
            id=""
            placeholder="Search your products"
          />
        </div>
        <button className="block bg-yellow-400 rounded-full w-fit text-black ml-[-40px] p-2 border-2 border-yellow-400">
          <SearchIcon className="w-5"></SearchIcon>
        </button>
      </div>
      <div className="flex flex-row justify-between items-center my-5 md:my-0">
        <button className="mx-5">
          <UserCircleIcon className="w-8 text-gray-300"></UserCircleIcon>
        </button>
        <span className=" md:block text-slate-400">|</span>
        <button className="mx-5">
          <ShoppingCartIcon className="w-8 text-gray-300"></ShoppingCartIcon>
        </button>
      </div>
    </header>
  );
};

export default Header;
