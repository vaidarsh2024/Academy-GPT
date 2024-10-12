import { IoIosSearch } from "react-icons/io";
import headerimg from "../assets/Image/headerimage.png";
import reg1 from "../assets/Image/Rectangle1.png";
import reg2 from "../assets/Image/Rectangle2.png";
import img1 from "../assets/Image/Group.png";
import img2 from "../assets/Image/Group1.png";
import img3 from "../assets/Image/Group2.png";
import img4 from "../assets/Image/Group3.png";

const Herosection = () => {
  return (
    <>
      <div className="font-urbanist px-2 md:px-3 lg:px-14 xl:px-10">
        <div className="lg:flex">
          <div className="mt-8 lg:mt-0 lg:w-4/6 space-y-3">
            <h2 className="text-[28px] md:text-6xl lg:text-5xl xl:text-7xl lg:ml-14 xl:ml-8  lg:leading-[70px] xl:leading-snug lg:mt-16 font-bold">
              &quot;You bring the{" "}
              <span className="text-primary">knowledge</span>, we’ll make it
              unforgettable.&quot;
            </h2>
            <div className="lg:hidden relative">
              <input
                className="w-full  p-2 pl-10 bg-primary border-4 border-white  shadow-lg placeholder:text-white placeholder:text-lg placeholder:pl-4  rounded-3xl focus:outline-none"
                type="search"
                name="search"
                id="search"
                placeholder="What would you like to learn?"
              />
              <IoIosSearch
                className="text-white absolute top-3  left-4 lg:top-24 lg:left-[350px]"
                size={21}
              />
            </div>
          </div>
          <div className="mx-auto relative lg:w-2/6">
            {/* Image container */}
            <img className="mx-auto" src={headerimg} alt="Hero section image" />

            {/* Search bar container */}
            <div className="absolute lg:right-96 lg:-translate-x-16 xl:-translate-x-10  lg:bottom-2 lg:w-[calc(100%-20px)]">
              <input
                className="hidden lg:block w-[500px] p-2 lg:p-[10px] bg-primary border-4 lg:pl-12  border-white shadow-lg placeholder:text-white placeholder:text-lg lg:placeholder:pl-1 rounded-3xl focus:outline-none"
                type="search"
                name="search"
                id="search"
                placeholder="What would you like to learn?"
              />
              <IoIosSearch
                className="text-white absolute left-4 top-1/2 transform -translate-y-1/2"
                size={21}
              />
            </div>
          </div>
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 lg:gap-x-8 mt-8">
          <div className="border-2 p-1 lg:p-3 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img className="w-10" src={reg1} alt="Review icon" />
            </div>
            <h4 className="text-lg whitespace-nowrap lg:text-3xl text-center">
              More than{" "}
              <span
                className="font-bold
              lg:font-semibold">
                4 million
              </span>
            </h4>
            <h5 className="text-primary lg:text-3xl text-center text-xl font-semibold">
              5-star reviews
            </h5>
          </div>

          <div className="border-2 p-2  rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img className="w-10" src={reg2} alt="Tutor icon" />
            </div>
            <h4 className="text-lg lg:text-3xl whitespace-nowrap text-center">
              65,000
              <span className="font-bold text-primary"> expert tutors</span>
            </h4>
            <h5 className="text-center lg:text-3xl text-xl font-semibold">
              in 300+ subjects
            </h5>
          </div>

          <div className="border-2 hidden lg:block p-2 lg:w-72 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img className="w-10" src={reg1} alt="Match icon" />
            </div>
            <h4 className="text-lg lg:text-3xl whitespace-nowrap text-center">
              Find a great <span className="font-bold">match</span>
            </h4>
            <h5 className="text-primary lg:text-3xl text-center text-xl font-semibold">
              5-star reviews
            </h5>
          </div>
        </div>
      </div>

      {/* Logos section */}
      <div className="mt-10">
        <div className="bg-black w-full flex justify-around p-4 my-auto">
          <img className="w-20 lg:w-40 my-auto" src={img1} alt="Logo 1" />
          <img className="w-20 lg:w-40 my-auto" src={img2} alt="Logo 2" />
          <img className="w-20 lg:w-40 my-auto" src={img3} alt="Logo 3" />
          <img className="w-20 lg:w-40 my-auto" src={img4} alt="Logo 4" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
