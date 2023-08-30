import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidationData} from '../utlis/validation'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleSubmit=()=>{
    const message=checkValidationData(email.current.value,password.current.value)
    setErrorMessage(message);
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80 rounded-md">
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
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full rounded bg-gray-600"
        />
        {/* <p className="text-red-500 font-bold py-2 text-lg">{errorMessage}</p> */}
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full rounded bg-gray-600"
        />
        <p className="text-red-500 font-bold py-2 text-lg">{errorMessage}</p>
        <button onClick={handleSubmit} type="submit" className="p-3 my-6 bg-red-700 w-full rounded-lg">
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
