import cour1 from '../assets/Image/courseimage.png';
import cour2 from "../assets/Image/courseimage1.png";
import cour3 from "../assets/Image/courseimage2.png";
import cour4 from "../assets/Image/courseimage3.png";
import cart from '../assets/Image/shopbag.png';
import { IoMdHeart } from "react-icons/io";

const Courses = () => {
  return (
    <>
      <div className="px-5 py-4 pb-10 font-urbanist bg-black ">
        <div className=" space-y-3 pb-5">
          <h2 className=" text-center lg:text-4xl text-3xl font-bold text-primary">
            Our Courses
          </h2>
          <p className="text-center text-xl lg:text-3xl px-5 font-medium text-white">
            {" "}
            Our Best Courses Offered and Teach <br />By Best of The Instructors
          </p>
        </div>
        <div className=" grid grid-flow-col grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4  ">
          <div className="bg-white p-3 rounded-lg ">
            <div className=" relative">
              <img src={cour1} alt="image" />

              <div className="absolute top-2 right-2 z-10 p-1 rounded-3xl bg-white/20 backdrop-blur-md">
                <p className="relative z-50">
                  <IoMdHeart className="text-red-700" size={15} />
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <h3 className=" text-xs md:text-lg lg:text-xl font-bold whitespace-nowrap">
                Basics of Java
              </h3>
              <button className="text-[6px] md:text-sm whitespace-nowrap text-primary p-1 px-2 font-semibold bg-primary bg-opacity-25 rounded-md">
                Beginner Level
              </button>
            </div>
            <p className=" text-[#1E1E1E] text-[8px] md:text-sm  font-medium py-2">
              Java is a class-based object-oriented simple programming language.
              Though we can not consider it to be fully ...{" "}
            </p>
            <div className="flex ">
              <h3 className="text-xl md:text-2xl text-primary font-semibold">
                125.65
              </h3>
              <span className="mt-auto font-semibold">AED</span>
            </div>
            <div className="flex space-x-1 pt-4">
              <button className="w-full p-2 md:text-lg whitespace-nowrap bg-primary rounded-3xl text-white font-bold text-sm">
                View Course
              </button>
              <button className=" border-2 my-auto p-2 w-8 md:w-10 md:h-9 h-7 border-primary rounded-full">
                <img className="-mt-1 " src={cart} alt="" />
              </button>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg ">
            <div className=" relative">
              <img src={cour3} alt="image" />

              <div className="absolute top-2 right-2 z-10 p-1 rounded-3xl bg-white/20 backdrop-blur-md">
                <p className="relative z-50">
                  <IoMdHeart className="text-red-700" size={15} />
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <h3 className=" text-xs md:text-lg lg:text-xl font-bold whitespace-nowrap">
                Intro to UI/UX
              </h3>
              <button className="text-[6px] md:text-sm whitespace-nowrap text-primary p-1 px-2 font-semibold bg-primary bg-opacity-25 rounded-md">
                Beginner Level
              </button>
            </div>
            <p className=" text-[#1E1E1E] text-[8px] md:text-sm font-medium py-2">
              Java is a class-based object-oriented simple programming language.
              Though we can not consider it to be fully ...{" "}
            </p>
            <div className="flex ">
              <h3 className="text-xl md:text-2xl text-primary font-semibold">
                16.58
              </h3>
              <span className="mt-auto font-semibold">AED</span>
            </div>
            <div className="flex space-x-1 pt-4">
              <button className="w-full p-2 md:text-lg whitespace-nowrap bg-primary rounded-3xl text-white font-bold text-sm">
                View Course
              </button>
              <button className=" border-2 my-auto p-2 w-8 h-7 md:w-10 md:h-9 border-primary rounded-full">
                <img className="-mt-1 " src={cart} alt="" />
              </button>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg ">
            <div className=" relative">
              <img src={cour2} alt="image" />

              <div className="absolute top-2 right-2 z-10 p-1 rounded-3xl bg-white/20 backdrop-blur-md">
                <p className="relative z-50">
                  <IoMdHeart className="text-red-700" size={15} />
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <h3 className=" text-xs md:text-lg lg:text-xl font-bold whitespace-nowrap">
                OOP Fundamental
              </h3>
              <button className="text-[6px] md:text-sm whitespace-nowrap text-primary p-1 px-2 font-semibold bg-primary bg-opacity-25 rounded-md">
                Beginner Level
              </button>
            </div>
            <p className=" text-[#1E1E1E] text-[8px] md:text-sm font-medium py-2">
              Java is a class-based object-oriented simple programming language.
              Though we can not consider it to be fully ...{" "}
            </p>
            <div className="flex ">
              <h3 className="text-xl md:text-2xl text-primary font-semibold">
                15.65
              </h3>
              <span className="mt-auto font-semibold">AED</span>
            </div>
            <div className="flex space-x-1 pt-4">
              <button className="w-full p-2 md:text-lg whitespace-nowrap bg-primary rounded-3xl text-white font-bold text-sm">
                View Course
              </button>
              <button className=" border-2 my-auto p-2 w-8 h-7 md:w-10 md:h-9 border-primary rounded-full">
                <img className="-mt-1 " src={cart} alt="" />
              </button>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg ">
            <div className=" relative">
              <img src={cour4} alt="image" />

              <div className="absolute top-2 right-2 z-10 p-1 rounded-3xl bg-white/20 backdrop-blur-md">
                <p className="relative z-50">
                  <IoMdHeart className="text-red-700" size={15} />
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <h3 className=" text-xs md:text-lg lg:text-xl font-bold whitespace-nowrap">
                UI Certification
              </h3>
              <button className="text-[6px] md:text-sm whitespace-nowrap text-primary p-1 px-2 font-semibold bg-primary bg-opacity-25 rounded-md">
                Beginner Level
              </button>
            </div>
            <p className=" text-[#1E1E1E] text-[8px] md:text-sm font-medium py-2">
              Java is a class-based object-oriented simple programming language.
              Though we can not consider it to be fully ...{" "}
            </p>
            <div className="flex ">
              <h3 className="text-xl md:text-2xl text-primary font-semibold">
                45.15
              </h3>
              <span className="mt-auto font-semibold">AED</span>
            </div>
            <div className="flex space-x-1 pt-4">
              <button className="w-full p-2 whitespace-nowrap md:text-lg bg-primary rounded-3xl text-white font-bold text-sm">
                View Course
              </button>
              <button className=" border-2 my-auto p-2 w-8 h-7 md:w-10 md:h-9 border-primary rounded-full">
                <img className="-mt-1 " src={cart} alt="cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses