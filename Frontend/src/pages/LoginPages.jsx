import LoginNavbar from "../Componets/loginNavbar";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import facebook from "../assets/Image/facebook.png";
import google from "../assets/Image/google.png";
import apple from "../assets/Image/apple.png";
import { Link } from "react-router-dom";
import login from "../assets/Image/Login.png";

const LoginPages = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <LoginNavbar />
      <div className=" lg:flex mt-8 px-8 h-screen lg:h-full  relative font-urbanist">
        <div className="lg:w-1/2 md:px-16 lg:px-20 md:my-auto">
          <h2 className="text-center text-4xl font-bold">LOGIN</h2>
          <p className="text-center text-black/70 text-lg">
            Login to access your account
          </p>

          <div className="py-5 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 pl-5 border-[1px] border-black rounded-lg "
            />
            <div className="relative mt-1">
              {passwordVisible ? (
                <AiOutlineEye
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  size={20}
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  size={20}
                />
              )}
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="w-full p-2 pl-5 border-[1px] border-black rounded-lg"
                placeholder="Password"
              />
            </div>
            <p className="text-sm font-medium">
              {" "}
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="mr-2"
              />{" "}
              Remember me
            </p>
          </div>
          <button className="p-2 w-full text-2xl font-bold rounded-md text-white bg-primary">
            Login
          </button>
          <p className="hidden lg:block text-center text-sm py-2 font-medium">
            Don’t have an account?{" "}
            <span className=" text-primary">
              {" "}
              <Link>Sign up</Link>
            </span>
          </p>

          <div className="flex py-5">
            <hr className="w-1/2 border-t-[0.5px] h-1 border-[#313131] my-auto " />
            <p className=" whitespace-nowrap text-sm px-2">Or login with</p>
            <hr className="w-1/2 border-t-[0.5px] h-1 border-[#313131] my-auto " />
          </div>

          <div className="flex space-x-3">
            <button className="p-3 w-full justify-center flex border-[1px] rounded-md border-black">
              <img className="w-6 my-auto" src={facebook} alt="img" />
            </button>
            <button className="p-3 w-full justify-center flex border-[1px] rounded-md border-black">
              <img className="w-6 my-auto" src={google} alt="img" />
            </button>
            <button className="p-2 w-full justify-center flex border-[1px] rounded-md border-black">
              <img className="w-6 my-auto " src={apple} alt="img" />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 mx-auto lg:my-auto">
          <div className="mx-auto flex justify-center">
            <img
              className="lg:max-h-[540px] xl:min-h-full justify-center"
              src={login}
              alt=""
            />
          </div>
        </div>
        <div className=" lg:hidden absolute place-content-center left-24 md:left-1/2 md:-translate-x-28 bottom-0">
          <p className="text-center text-sm font-medium">
            Don’t have an account?{" "}
            <span className=" text-primary">
              {" "}
              <Link>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPages;
