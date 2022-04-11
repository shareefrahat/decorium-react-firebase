import React from "react";
import googleLogo from "../../images/google.png";

const Login = () => {
  return (
    <div>
      <div className="p-4 border border-yellow-500 shadow-xl w-fit mx-auto rounded">
        <form>
          <h4 className="inline-block text-md font-bold mb-5 border-b-4 border-b-yellow-500 text-xl md:text-2xl px-2 text-slate-900">
            Login
          </h4>
          <div className="text-left flex flex-col gap-4 justify-center items-center px-2 md:px-6 text-lg">
            <div>
              <label htmlFor="user-email">Email:</label>
              <p>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="email"
                  name="email"
                  id="user-email"
                />
              </p>
            </div>
            <div>
              <label htmlFor="user-password">Password:</label>
              <p>
                <input
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="password"
                  name="password"
                  id="user-password"
                />
              </p>
            </div>
            <div>
              <span className="text-md text-slate-500">
                Don't have an account?
              </span>
              <span className="text-md text-blue-700 mx-2">Sign Up</span>
            </div>
            <div>
              <button
                className="bg-yellow-400 text-slate-900 px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-2"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <div className="my-5">
          <div className="flex flex-row justify-center items-center">
            <div className="w-full bg-gray-400">
              <hr />
            </div>
            <span className="mx-2 text-gray-500 font-serif text-md md:text-lg">
              Or
            </span>
            <div className="w-full bg-gray-400">
              <hr />
            </div>
          </div>
          <div className="mt-4">
            <button className="flex flex-row justify-center items-center border border-blue-600 rounded p-2 mx-auto shadow-lg">
              <img className="w-6 md:w-8 mx-2" src={googleLogo} alt="" />
              <p className="mx-2 font-serif text-md md:text-lg">
                Continue with Google
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
