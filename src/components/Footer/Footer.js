import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-900 text-gray-300">
      <section className=" flex flex-col md:flex-row justify-evenly items-center py-10">
        <div>
          <h5 className="text-md text-yellow-400 font-bold">PRODUCTS</h5>
          <ul className="my-5">
            <li>
              <a href="a">Table Chair</a>
            </li>
            <li>
              <a href="a">Book Shelves</a>
            </li>
            <li>
              <a href="a">Sofa Set</a>
            </li>
            <li>
              <a href="a">Bed and Decorative</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-md text-yellow-400 font-bold">STAKEHOLDERS</h5>
          <ul className="my-5">
            <li>
              <a href="a">Google</a>
            </li>
            <li>
              <a href="a">Amazon</a>
            </li>
            <li>
              <a href="a">Tesla Ltd.</a>
            </li>
            <li>
              <a href="a">Fesla Inc.</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-md text-yellow-400 font-bold">SPONSORS</h5>
          <ul className="my-5">
            <li>
              <a href="a">Dell</a>
            </li>
            <li>
              <a href="a">Samsung</a>
            </li>
            <li>
              <a href="a">Xiaomi</a>
            </li>
            <li>
              <a href="a">Code House</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block border-r-2 h-20 border-r-slate-400"></div>
        <div>
          <h5 className="text-md text-yellow-400 font-bold">SUBSCRIPTION</h5>
          <div className="my-5">
            <h5 className="text-sm mb-2">Subscribe to our Newsletter</h5>
            <div className="mb-4">
              <input
                className="px-3 py-2 bg-white text-black border  placeholder-slate-400 focus:outline-none focus:border-yellow-500  block w-full rounded-full sm:text-sm focus:ring-1"
                type="email"
                name=""
                id=""
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <button className="bg-yellow-400 rounded-full px-5 py-1 text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-8 text-md border-t border-t-slate-400">
        <p>&copy; Copyright Reserved | Decorium 2022</p>
      </section>
    </footer>
  );
};

export default Footer;
