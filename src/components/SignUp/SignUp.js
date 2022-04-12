import { sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import googleLogo from "../../images/google.png";

const SignUp = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState({ valid: "", error: "" });
  const [email, setEmail] = useState({ valid: "", error: "" });
  const [password, setPassword] = useState({ valid: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    valid: "",
    error: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/user";

  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const getName = (e) => {
    const inputName = e.target.value;
    if (inputName) {
      setName({ valid: inputName });
    } else {
      setName({ error: "Please enter your name" });
    }
  };

  const getEmail = (e) => {
    const inputEmail = e.target.value;
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
      setEmail({ valid: inputEmail });
    } else {
      setEmail({ error: "Your email is invalid" });
    }
  };

  const getPassword = (e) => {
    const inputPassword = e.target.value;
    if (/^.{8,32}$/.test(inputPassword)) {
      setPassword({ valid: inputPassword });
    } else {
      setPassword({ error: "Password must be min 8 character" });
    }
  };

  const getConfirmPassword = (e) => {
    const inputConfirmPassword = e.target.value;

    if (inputConfirmPassword === password.valid) {
      setConfirmPassword({ valid: inputConfirmPassword });
    } else {
      setConfirmPassword({ error: "Password doesn't match" });
    }
  };

  const handleOnSubmit = (e) => {
    createUserWithEmailAndPassword(email.valid, password.valid).then(() => {
      setProfile();
      emailVerify();
      toast.success("Successful");
    });

    if (error) {
      toast.error("Error");
    }
    e.preventDefault();
  };

  const emailVerify = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email verification sent");
    });
  };

  const setProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name.valid,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="p-4 border border-yellow-500 shadow-xl w-fit mx-auto rounded my-10">
        <form onSubmit={handleOnSubmit}>
          <h4 className="inline-block text-md font-bold mb-5 border-b-4 border-b-yellow-500 text-xl md:text-2xl px-2 text-slate-900">
            Sign Up
          </h4>
          <div className="text-left flex flex-col gap-4 justify-center items-center px-2 md:px-6 text-lg">
            <div>
              <label htmlFor="user-name">Name:</label>
              <div>
                <input
                  onBlur={getName}
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="text"
                  name="username"
                  id="user-name"
                  required
                />
                <p className="text-red-700">{name.error}</p>
              </div>
            </div>
            <div>
              <label htmlFor="user-email">Email:</label>
              <div>
                <input
                  onBlur={getEmail}
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="email"
                  name="email"
                  id="user-email"
                  required
                />
                <p className="text-red-700">{email.error}</p>
              </div>
            </div>
            <div>
              <label htmlFor="user-password">Password:</label>
              <div>
                <input
                  onBlur={getPassword}
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="password"
                  name="password"
                  id="user-password"
                  required
                />
                <p className="text-red-700">{password.error}</p>
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password:</label>
              <div>
                <input
                  onBlur={getConfirmPassword}
                  className="px-4 py-2 border border-gray-400 focus:border-yellow-500 outline-none rounded"
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  required
                />
                <p className="text-red-700">{confirmPassword.error}</p>
              </div>
            </div>
            <div>
              <span className="text-md text-slate-500">
                Already have an account?
              </span>
              <Link to="/login" className="text-md text-blue-700 mx-2">
                Login
              </Link>
            </div>
            <div>
              <button
                className="bg-yellow-400 text-slate-900 px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-2"
                type="submit"
              >
                Sign Up
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
            <button
              onClick={() => signInWithGoogle()}
              className="flex flex-row justify-center items-center border border-blue-600 rounded p-2 mx-auto shadow-lg"
            >
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

export default SignUp;
