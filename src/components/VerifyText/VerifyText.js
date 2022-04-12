import { sendEmailVerification } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const VerifyText = () => {
  const [user] = useAuthState(auth);

  const emailVerify = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email verification sent");
    });
  };
  return (
    <div>
      <div className="text-lg md:text-xl p-4 border border-yellow-500 shadow-xl w-fit mx-auto rounded my-10 text-gray-700 font-serif">
        <p>
          We have sent a verification link to
          <br />
          <span className="text-blue-700">{user.email}</span>
        </p>
        <p>Please Check Inbox or Spam folder.</p>
        <p className="w-80 text-lg mt-10 text-red-700">
          If you not found any email then click below to send verification mail
          again
        </p>
        <button
          onClick={emailVerify}
          className="bg-yellow-400 text-slate-900 px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-5"
          type="button"
        >
          Send Verification Mail
        </button>
      </div>
    </div>
  );
};

export default VerifyText;
