import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoWifiSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const LearnerQuestions = () => {
  return (
    <>
      <div className="font-urbanist">
        <div className="grid grid-cols-4 lg:grid-cols-8 ">
          <div className=" relative lg:flex lg:justify-between w-full col-span-4 lg:col-span-8">
            <div className="lg:w-6/12 relative">
              <button className="bg-primary absolute text-[10px] lg:text-xs lg:px-6 font-semibold right-[1px] top-[1px] p-[8px] lg:p-[8.5px] px-6 text-white  rounded-r-md">
                Search
              </button>
              <input
                className="w-full  border-[1px] pl-8 placeholder:text-black placeholder:text-xs font-medium border-black p-[3.5px] lg:p-[4.5px] lg:pl-8 px-2  rounded-md focus:outline-none"
                type="search"
                name="searchQuestion"
                id="searchQuestion"
                placeholder="What would you like to learn?"
              />
              <IoIosSearch className=" absolute top-2 left-2 lg:top-[10px]" />
            </div>
            <div className="lg:w-3/12">
              <select
                className="border-[1px] lg:p-[4.5px] w-full rounded-md border-black p-1 xl:p-[6x]"
                name="Answer"
                id="answer">
                <option value="Answer">Answer Question</option>
              </select>
            </div>
          </div>

          <div className=" border-2 mt-5 rounded-lg  drop-shadow-lg col-span-4  lg:col-span-8">
            <div className="p-2 space-y-2 lg:flex ">
              <div className=" col-span-4 lg:w-3/12 xl:w-2/12 space-y-2 lg:space-y-4">
                <p className=" w-full text-sm lg:text-lg font-medium text-black/70  flex">
                  <IoMdCheckmarkCircle className="my-auto  size-5 lg:size-6 mr-2" />{" "}
                  Expert The Answer
                </p>
                <div className="flex lg:block space-x-4 lg:space-x-0 lg:my-auto lg:space-y-3  justify-between">
                  <div>
                    <p className="flex text-sm lg:text-lg">
                      <IoWifiSharp className=" rotate-45  text-sm font-medium text-black/70 my-auto mr-2 size-5 lg:size-6 " />
                      Follows
                    </p>
                  </div>
                  <div className="flex">
                    <button className="text-white bg-primary text-xs lg:mx-auto lg:text-base xl:text-lg font-semibold p-1 px-2 lg:px-3 rounded-md">
                      Chemistry
                    </button>
                  </div>
                </div>
              </div>

              <div className=" space-y-2 lg:w-9/12 xl:w-10/12 lg:px-2">
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-semibold text-base lg:text-lg xl:text-2xl">
                      Ap Chemistry Crucible lab
                    </h2>
                  </div>
                  <div>
                    <p className="font-semibold text-base lg:text-lg xl:text-2xl">
                      29d
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] lg:text-sm xl:text-lg text-black/80">
                    A Student hearts up a crucible and in the end after doing
                    the math, the hydrate is 1.51 g, the dehydrate is 0.98 g and
                    the water lost is 0.53 g. This needs to be converted into
                    moles of copper (II)...{" "}
                    <span className="text-primary">More</span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="my-auto">
                    <h4 className="text-xs my-auto lg:text-base xl:text-xl font-semibold">
                      Answer Style: Online Classroom
                    </h4>
                  </div>
                  <div>
                    <button className=" bg-[#046B49] p-1 px-2 text-xs lg:text-base xl:text-lg font-semibold text-white rounded-md">
                      Answer Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-2 mt-5 rounded-lg  drop-shadow-lg col-span-4  lg:col-span-8">
            <div className="p-2 space-y-2 lg:flex ">
              <div className=" col-span-4 lg:w-3/12 xl:w-2/12 space-y-2 lg:space-y-4">
                <p className=" w-full text-sm lg:text-lg font-medium text-black/70  flex">
                  <IoMdCheckmarkCircle className="my-auto  size-5 lg:size-6 mr-2" />{" "}
                  Expert The Answer
                </p>
                <div className="flex lg:block space-x-4 lg:space-x-0 lg:my-auto lg:space-y-3  justify-between">
                  <div>
                    <p className="flex text-sm lg:text-lg">
                      <IoWifiSharp className=" rotate-45  text-sm font-medium text-black/70 my-auto mr-2 size-5 lg:size-6 " />
                      Follows
                    </p>
                  </div>
                  <div className="flex">
                    <button className="text-white bg-primary text-xs lg:mx-auto lg:text-base xl:text-lg font-semibold p-1 px-2 lg:px-3 rounded-md">
                      Chemistry
                    </button>
                  </div>
                </div>
              </div>

              <div className=" space-y-2 lg:w-9/12 xl:w-10/12 lg:px-2">
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-semibold text-base lg:text-lg xl:text-2xl">
                      Ap Chemistry Crucible lab
                    </h2>
                  </div>
                  <div>
                    <p className="font-semibold text-base lg:text-lg xl:text-2xl">
                      29d
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] lg:text-sm xl:text-lg text-black/80">
                    A Student hearts up a crucible and in the end after doing
                    the math, the hydrate is 1.51 g, the dehydrate is 0.98 g and
                    the water lost is 0.53 g. This needs to be converted into
                    moles of copper (II)...{" "}
                    <span className="text-primary">More</span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="my-auto">
                    <h4 className="text-xs my-auto lg:text-base xl:text-xl font-semibold">
                      Answer Style: Online Classroom
                    </h4>
                  </div>
                  <div>
                    <button className=" bg-[#046B49] p-1 px-2 text-xs lg:text-base xl:text-lg font-semibold text-white rounded-md">
                      Answer Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-2 mt-5 rounded-lg  drop-shadow-lg col-span-4  lg:col-span-8">
            <div className="p-2 space-y-2 lg:flex ">
              <div className=" col-span-4 lg:w-3/12 xl:w-2/12 space-y-2 lg:space-y-4">
                <p className=" w-full text-sm lg:text-lg font-medium text-black/70  flex">
                  <IoMdCheckmarkCircle className="my-auto  size-5 lg:size-6 mr-2" />{" "}
                  Expert The Answer
                </p>
                <div className="flex lg:block space-x-4 lg:space-x-0 lg:my-auto lg:space-y-3  justify-between">
                  <div>
                    <p className="flex text-sm lg:text-lg">
                      <IoWifiSharp className=" rotate-45  text-sm font-medium text-black/70 my-auto mr-2 size-5 lg:size-6 " />
                      Follows
                    </p>
                  </div>
                  <div className="flex">
                    <button className="text-white bg-primary text-xs lg:mx-auto lg:text-base xl:text-lg font-semibold p-1 px-2 lg:px-3 rounded-md">
                      Chemistry
                    </button>
                  </div>
                </div>
              </div>

              <div className=" space-y-2 lg:w-9/12 xl:w-10/12 lg:px-2">
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-semibold text-base lg:text-lg xl:text-2xl">
                      Ap Chemistry Crucible lab
                    </h2>
                  </div>
                  <div>
                    <p className="font-semibold text-base lg:text-lg xl:text-2xl">
                      29d
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] lg:text-sm xl:text-lg text-black/80">
                    A Student hearts up a crucible and in the end after doing
                    the math, the hydrate is 1.51 g, the dehydrate is 0.98 g and
                    the water lost is 0.53 g. This needs to be converted into
                    moles of copper (II)...{" "}
                    <span className="text-primary">More</span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="my-auto">
                    <h4 className="text-xs my-auto lg:text-base xl:text-xl font-semibold">
                      Answer Style: Online Classroom
                    </h4>
                  </div>
                  <div>
                    <button className=" bg-[#046B49] p-1 px-2 text-xs lg:text-base xl:text-lg font-semibold text-white rounded-md">
                      Answer Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnerQuestions;
