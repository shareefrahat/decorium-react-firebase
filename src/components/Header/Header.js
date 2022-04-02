import React, { useState } from "react";
import logo from "../../images/decorium.png";
import { UserCircleIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/shop", name: "Shop" },
    { id: 3, path: "/orders", name: "Orders" },
    { id: 4, path: "/about", name: "About" },
    { id: 5, path: "/contact", name: "Contact" },
  ];
  return (
    <header>
      <section className="bg-slate-900 text-white flex flex-col md:flex-row justify-around items-center px-2 md:px-0 py-5 md:py-8 m-0">
        <div className="flex flex-row justify-center items-center my-5 md:my-0">
          <img className="w-8" src={logo} alt="" />
          <h1 className="text-4xl mx-2  text-yellow-400 hover:text-gray-100">
            Decorium
          </h1>
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
          <button className="block bg-yellow-400 rounded-full w-fit text-black ml-[-40px] p-2 border-2 border-yellow-400 ">
            <SearchIcon className="w-5"></SearchIcon>
          </button>
        </div>
        <div className="flex flex-row justify-between items-center my-5 md:my-0">
          <button className="mx-5">
            <UserCircleIcon className="w-8 text-gray-300 hover:text-yellow-400"></UserCircleIcon>
          </button>
          <span className=" md:block text-slate-400">|</span>
          <button className="mx-5 relative">
            <span className="bg-yellow-400 text-black aspect-square rounded-full absolute bottom-5 left-4 px-1 font-bold">
              99
            </span>
            <ShoppingCartIcon className="w-8 text-gray-300 hover:text-yellow-400"></ShoppingCartIcon>
          </button>
        </div>
      </section>
      <section className="bg-slate-800">
        <div
          onClick={() => setOpen(!open)}
          className=" text-yellow-400 py-2 md:hidden"
        >
          {open ? (
            <span className="flex justify-center items-center">
              <XIcon className="w-8 inline"></XIcon>
              <span className="font-bold">CLOSE</span>
            </span>
          ) : (
            <span className="flex justify-center items-center">
              <MenuIcon className="w-8 inline"></MenuIcon>
              <span className="font-bold">MENU</span>
            </span>
          )}
        </div>
        <ul
          className={`${
            open
              ? "flex flex-col justify-center gap-5 py-5"
              : "hidden md:flex md:flex-row md:justify-evenly md:mx-24  md:py-4"
          }`}
        >
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className="text-white text-xl hover:text-yellow-400"
                to={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default Header;
