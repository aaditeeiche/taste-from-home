import React, { useState } from "react";
import signupvid from "../imgs/signup.gif";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImageToBase64 } from "../utility/imagetoBase64";
import { toast } from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  console.log(data);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  //   function for already registered user case
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return { ...preve, [name]: value };
    });
  };

  // handles asynchronous operations using promise (eventual completion/failure)
  const handleUploadProfileImage = async (e) => {
    // pending state of asynchronous operation
    const data = await ImageToBase64(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // prevents the page from refreshing when the submit button is clicked so the data is intact in the form to be handled further
    const { firstName, email, password, confirmPassword } = data; //extract all the mandatory data from the form into const var
    if (firstName && email && password && confirmPassword) {
      //this m akes sure that these fields are non-empty
      if (password === confirmPassword) {
        //if this is verified, then send all data to the server and navigate to login page
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();
        console.log(dataRes);
        // alert(dataRes.message);
        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        alert("Error: Passwords do not Match");
      }
    } else {
      alert("Please Enter All Required Details");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        {/* <h1 className='text-center test-2xl font-bold'>SIGN UP</h1> */}
        <div className="w-20 h-20 overflow-hidden drop-shadow-md rounded-full shadow-md m-auto relative cursor-pointer">
          <img
            src={data.image ? data.image : signupvid}
            className="w-full h-full"
            alt="upload profile img"
          />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 p-1 bg-slate-400 opacity-60 w-full text-center h-1/3">
              <p className="text-xs text-white cursor-pointer">Upload</p>
            </div>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfileImage}
            />
          </label>
        </div>

        <form className="w-full py-2 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Set Password</label>
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

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex px-1 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShowAlt /> : <BiHide />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full max-w-[150px] m-auto bg-blue-400 hover:bg-blue-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
          >
            SIGN UP
          </button>
        </form>

        <p className="text-left text-sm mt-2 m-auto">
          Already Resistered with an Account?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
