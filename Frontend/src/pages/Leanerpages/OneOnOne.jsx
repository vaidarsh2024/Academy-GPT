
 // Import useNavigate for navigation
import oneimg from "../../assets/image/oneon.png";
import { IoMdStar } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import flag from "../../assets/Image/UK Flag.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const OneOnOne = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([20, 100]); // Default price range
  const [ageRange, setAgeRange] = useState([18, 60]); // Default age range

  const tutors = [
    {
      id: 1,
      name: "Kristin Watson",
      rating: 5,
      hours: 1982,
      price: 210,
      language: "English",
      description:
        "Phonics is a major portion of teaching kindergarten.I also  taught bilingual of students, which made teaching math phonics  even more important. See Esther Howard  full  profilePhonics is a major portion of teaching kindergarten.I also  taught bilingual students, which made teaching math phonics  even more important. See Esther Howard  full  profile.Phonics is a major portion of teaching kindergarten.I also  taught bilingual students, which made, taught bilingual students, which made teaching math phonics  even more important. See Esther Howard  full  profile.",
    },
    {
      id: 2,
      name: "Esther Howard",
      rating: 5,
      hours: 1369,
      price: 250,
      language: "English",
      description:
        "Phonics is a major portion of teaching kindergarten.I also  taught bilingual of students, which made teaching math phonics  even more important. See Esther Howard  full  profilePhonics is a major portion of teaching kindergarten.I also  taught bilingual students, which made teaching math phonics  even more important. See Esther Howard  full  profile.Phonics is a major portion of teaching kindergarten.I also  taught bilingual students, which made, taught bilingual students, which made teaching math phonics  even more important. See Esther Howard  full  profile.",
    },
  ];

  const handleShowFilter = () => {
    setShowFilter(true);
  };

  const handleRangeChange = (event, setter) => {
    const value = event.target.value.split(",").map(Number);
    setter(value);
  };

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="flex justify-between py-3 col-span-5 w-full">
          <div className="my-auto">
            <h2 className="text-xs lg:text-sm xl:text-base font-normal">
              <span className="text-primary text-base lg:text-xl xl:text-2xl font-semibold">
                3,000 Math Students
              </span>{" "}
              fit your Choices
            </h2>
          </div>
          <div className="my-auto">
            <button
              onClick={handleShowFilter}
              className="bg-black p-1 px-3 rounded text-xs lg:text-sm xl:text-lg font-semibold text-white">
              Filters
            </button>
          </div>
        </div>

        {tutors.map((tutor, index) => (
          <div
            key={index}
            className="border-2 md:flex col-span-5 z-20 rounded-md drop-shadow-md p-2 mt-4">
            <div className="md:w-3/12">
              <div className="flex md:block relative md:static  space-x-2 md:space-x-0 lg:space-y-1 bg-[#F6F6F6] py-2 pb-3">
                <img
                  className="w-20 h-20 lg:size-24 xl:size-36 bg-[#F6F6F6] my-auto md:mx-auto"
                  src={oneimg}
                  alt="img"
                />
                <div className="flex bg-[#F6F6F6]">
                  <div className="space-y-1 lg:space-y-2 xl:mx-auto">
                    <h2 className="text-lg md:text-xl xl:text-2xl font-semibold">
                      {tutor.name}
                    </h2>
                    <p className="font-semibold text-[13px] md:text-[15px] xl:text-base">
                      5.0
                      <span className="font-normal pl-1 text-[10px] md:text-[11px] xl:text-xs">
                        ({tutor.rating})
                      </span>
                    </p>
                    <div className="flex text-primary md:space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <IoMdStar key={i} className="md:size-5 xl:size-7" />
                      ))}
                    </div>
                    <p className="flex text-xs font-medium md:text-sm xl:text-lg text-black/70 xl:pr-10 whitespace-nowrap md:whitespace-normal">
                      <LuClock3 className="my-auto md:my-0 mr-1 md:size-5 xl:size-6" />
                      {tutor.hours} hours teaching students
                    </p>
                  </div>
                </div>
                <div className="absolute -right-2 md:top-7 lg:top-6 md:right-1">
                  <div className="relative space-y-2">
                    <div className="flex mr-3 -mt-2">
                      <FaRegHeart className="size-4 md:size-5 xl:size-7" />
                    </div>
                    <button className="md:hidden absolute p-1 -bottom-12 text-base font-medium px-2 right-0 bg-[#056FD2] inline rounded-l-lg text-white">
                      Certified
                    </button>
                    <button className="md:hidden absolute p-1 -bottom-[95px] text-base font-medium right-0 text-right inline rounded-l-lg bg-[#60AD56] text-white">
                      Math
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-10/12">
              <div className="py-2 space-y-1 bg-white">
                <div className="flex justify-between md:pr-14">
                  <h2 className="text-[19px] md:text-xl xl:text-4xl font-semibold">
                    {tutor.name}
                  </h2>
                  <p className="text-lg md:text-xl xl:text-3xl font-medium">
                    ${tutor.price}
                  </p>
                </div>
                <p className="text-primary text-sm md:text-base xl:text-2xl">
                  Credentialed multiple subject teacher
                </p>
                <p className="text-[9.73px] md:text-[13px] xl:text-lg text-black/60 font-normal">
                  {tutor.description}
                </p>
              </div>

              <div className="flex justify-between py-2">
                <div className="flex space-x-1 my-auto">
                  <img
                    className="w-7 h-4 md:w-9 md:h-6 my-auto"
                    src={flag}
                    alt="img"
                  />
                  <p className="text-[10px] md:text-xs xl:text-sm font-semibold my-auto">
                    {tutor.language}
                  </p>
                  <div className="pl-10">
                    <button className="hidden md:inline p-1 px-2 text-base xl:text-lg font-medium rounded-lg bg-[#60AD56] text-white">
                      Math
                    </button>
                  </div>
                </div>

                <div>
                  <Link
                    to={`/leanernavbar/oneonone/tutordetails/${tutor.id}`}
                    className="p-2 rounded-md text-xs md:text-sm xl:text-lg font-semibold text-white bg-primary">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {showFilter && (
          <div className="fixed top-0 left-0 w-full h-full  font-urbanist py-5 px-3 bg-black bg-opacity-60 z-50 flex justify-center items-center">
            <div className="bg-white rounded-xl p-5  shadow-xl w-full lg:w-5/12 xl:w-2/6">
              <h2 className=" text-2xl font-semibold">Filter</h2>
              <div className="space-y-2">
                {/* Hour Rate Range */}
                <h3 className=" text-2xl font-semibold">
                  Hour rate:{" "}
                  <span className="text-black/60">${priceRange[0]} & up</span>
                </h3>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={priceRange}
                  onChange={(e) => handleRangeChange(e, setPriceRange)}
                  className="w-full h-[2px]  bg-primary"
                />

                {/* Teaching Type Select */}

                <select
                  className="w-full  text-lg border-[1px] rounded-md p-2 border-black/50"
                  name="teachingType"
                  id="teachingType">
                  <option value="oneonone">One-on-One</option>
                  <option value="group4">Group (4)</option>
                  <option value="group4plus">Group (4+)</option>
                </select>

                {/* Tutor Level Select */}
                <h3 className=" text-2xl font-semibold">Learner Level</h3>
                <select
                  className="w-full text-lg  border-[1px] rounded-md p-2 border-black/50"
                  name="tutorLevel"
                  id="tutorLevel">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>

                {/* Age Range */}

                <input
                  type="range"
                  min="18"
                  max="60"
                  value={ageRange}
                  onChange={(e) => handleRangeChange(e, setAgeRange)}
                  className="w-full h-[2px] bg-primary"
                />

                <h3 className="font-semibold text-lg">
                  Tutor age:{" "}
                  <span className="text-black/60"> {ageRange[0]} & up</span>{" "}
                </h3>
              </div>

              {/* Additional Options */}
              <div>
                <div>
                  <input type="checkbox" className="size-5 my-auto" />
                  <label className="pl-5 my-auto text-lg font-semibold">
                    Instant Book
                  </label>
                </div>
                <div>
                  <input type="checkbox" className="size-5 my-auto" />
                  <label className="pl-5 my-auto text-lg font-semibold">
                    Available in-person
                  </label>
                </div>
                <div>
                  <input type="checkbox" className="size-5 my-auto" />
                  <label className="pl-5 my-auto text-lg font-semibold">
                    Background check on file
                  </label>
                </div>
              </div>

              {/* Filter Action Buttons */}
              <div className="flex justify-center space-x-3">
                <button className="p-1 px-2  text-xl font-bold rounded-md text-white bg-primary">
                  Done
                </button>
                <button
                  className="p-1 px-2 rounded-md  text-xl font-bold text-primary border-primary border-[1px]"
                  onClick={() => setShowFilter(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OneOnOne;
