import React, { useState } from "react";
import signupvid from "../imgs/signup.gif";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(data);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  //   function for already registered user case
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return { ...preve, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevents the page from refreshing when the submit button is clicked so the data is intact in the form to be handled further
    const { email, password } = data; //extract all the mandatory data from the form into const var
    if (email && password) {
      //this makes sure that these fields are non-empty
      alert("Login Successful");
    } else {
      alert("Please Enter All Required Details");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        {/* <h1 className='text-center test-2xl font-bold'>SIGN UP</h1> */}
        <div className="w-20 overflow-hidden drop-shadow-md rounded-full shadow-md m-auto">
          <img src={signupvid} className="w-full" />
        </div>

        <form className="w-full py-2 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-1 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-blue-400 hover:bg-blue-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            LOG IN
          </button>
        </form>

        <p className="text-left text-sm mt-2 m-auto">
          Don't Have An Account?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
