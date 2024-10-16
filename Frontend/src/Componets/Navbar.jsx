import logo from "../assets/Image/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-black mt-5 md:mt-0 font-urbanist">
        <nav>
          <div className="flex justify-between py-1 my-auto xl:py-1 px-2 lg:px-8 xl:px-10">
            <div className="flex space-x-1 md:space-x-10 lg:space-x-12 xl:space-x-20">
              <Link to={"/"}>
                {" "}
                <img
                  className="w-16 h-6 mt-2 lg:mt-3 lg:h-7 my-auto md:w-28 xl:w-36 xl:h-9"
                  src={logo}
                  alt="logo"
                />
              </Link>

              <div className="text-white text-xs lg:text-base space-x-2 flex lg:space-x-5 my-auto">
                <button className="hidden lg:block lg:p-2 px-1 p-1 border-primary whitespace-nowrap border-[1px] rounded-md">
                  About us
                </button>
                <button className=" p-1 lg:p-2 px-1 border-primary whitespace-nowrap border-[1px] rounded-md">
                  Ask Question
                </button>
              </div>
            </div>

            <div className="text-white text-xs lg:text-base my-2 flex space-x-2 lg:space-x-4">
              <button className=" lg:p-2 p-1 whitespace-nowrap bg-primary rounded-md">
                <Link to={"/applynow"}>Apply Now</Link>
              </button>
              <button className="lg:p-2 py-1 px-1 border-primary whitespace-nowrap border-[1px] rounded-md">
                <Link to={"/loginpage"}>Login</Link>
              </button>
              <button className="lg:p-2 px-1  bg-primary whitespace-nowrap rounded-md">
                <Link to={"/signuppages"}>Sign Up</Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
