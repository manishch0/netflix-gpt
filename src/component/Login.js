import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign IN" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full rounded bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full rounded bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full rounded bg-gray-600"
        />
        <button type="submit" className="p-3 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
