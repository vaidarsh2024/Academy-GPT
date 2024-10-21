import { MdAttachFile } from "react-icons/md";
import { PiCameraLight } from "react-icons/pi";
import { IoMdMic } from "react-icons/io";

const AskQuestion = () => {
  return (
    <>
      <div className=" grid grid-rows-7  ">
        <div className=" row-span-6 ">
          <input
            className="w-full h-10 border-b-2 pl-2 border-black/70 focus:outline-none"
            type="text"
            name="subject"
            id="subject"
            placeholder=" Subject"
          />

          <textarea
            name="desprection"
            id="description"
            placeholder="Description"
            className="w-full h-full border-2 drop-shadow-md focus:outline-none pl-2"></textarea>
        </div>
        <div className="row-span-1 mt-11   w-full">
          <div className="flex space-x-5 px-2 pb-2">
            <p className="text-lg lg:text-xl xl:text-2xl font-semibold">
              Prefered answer
            </p>

            <div className="flex space-x-5 my-auto">
              <div>
                <input
                  type="checkbox"
                  name="online Classroom"
                  id=" online Classroom"
                  className="mr-3"
                />
                <label>Online Classroom</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="online Classroom"
                  id=" online Classroom"
                  className="mr-3"
                />
                <label>Ai</label>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-2 border-2 mx-3 rounded-full">
            <div className="flex space-x-4 my-auto">
              <MdAttachFile className="size-5 md:size-6 lg:size-8" />
              <PiCameraLight className="size-5 md:size-6 lg:size-8" />
            </div>
            <input
              className="w-full  mx-3 py-2 rounded-3xl pl-4 focus:outline-none"
              type="text"
              name="text"
              id="text"
              placeholder="Text"
            />

            <div className="my-auto">
              <div className="p-1 bg-primary text-white rounded-3xl">
                <IoMdMic className="size-5 md:size-6 lg:size-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskQuestion;
