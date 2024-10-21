import { useLocation, useParams } from "react-router-dom";
import oneimg from "../assets/Image/oneon.png";
import { IoMdStar } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import flag from "../assets/Image/UK Flag.png";
import { IoLocationOutline } from "react-icons/io5";
import whatapp from "../assets/Image/whatsapp.png";

const TutorDetails = () => {
  const { id } = useParams(); 
  const location = useLocation(); 
  const tutorFromState = location.state; 


  const tutors = [
    {
      id: 1,
      name: "Kristin Watson",
      rating: 5,
      hours: 1982,
      price: 210,
      language: "English",
      description: "Phonics is a major portion of teaching kindergarten...",
      image: oneimg,
      location: "new, york city usa",
    },
    {
      id: 2,
      name: "Esther Howard",
      rating: 5,
      hours: 1369,
      price: 250,
      language: "English",
      description: "Phonics is a major portion of teaching kindergarten...",
      location: "new, york city usa",
    },
  ];

  // Find the tutor either from passed state or from the local data
  const tutor =
    tutorFromState || tutors.find((tutor) => tutor.id === Number(id));

  // If the tutor is not found, display an error message
  if (!tutor) {
    return <div className="p-6">Tutor not found</div>;
  }

  // Render the selected tutor's details
  return (
    <>
      <div className="px-2  py-2">
        <div className="border-2 md:border-0 md:space-x-5 md:flex font-urbanist col-span-5 z-20 rounded-md drop-shadow-md p-2 ">
          <div className="md:w-4/12 h-fit  md:rounded-md md:border-2  md:drop-shadow-md md:space-x-2 relative md:px-3 bg-[#F6F6F6] ">
            <div className="flex md:block relative  mt-16 md:static  space-x-2 md:space-x-0 md:space-y-2  py-2 md:py-0 pb-3">
              <img
                className="w-20 h-20 lg:size-24 xl:size-36  my-auto md:mx-auto"
                src={oneimg}
                alt="img"
              />
              <button className="hidden md:flex absolute px-3 xl:px-4 top-3  p-1 left-0  font-medium xl:text-lg   bg-[#056FD2]  rounded-r-lg text-white">
                Certified
              </button>
              <button className="hidden md:flex absolute p-1  right-0 top-10  text-base font-medium text-right xl:text-lg  xl:px-3 rounded-l-lg bg-[#60AD56] text-white">
                Math
              </button>
              <div className="hidden md:flex ">
                <div className=" absolute top-3 left-0 "></div>
              </div>
              <div className="flex bg-[#F6F6F6]">
                <div className="space-y-1 md:space-y-2 xl:mx-auto">
                  <h2 className="text-lg md:text-xl xl:text-2xl font-semibold">
                    {tutor.name}
                  </h2>
                  <div className="flex space-x-2">
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
                  </div>

                  <p className="flex text-xs font-medium md:text-sm xl:text-lg text-black/70 xl:pr-10 whitespace-nowrap md:whitespace-normal">
                    <LuClock3 className="my-auto md:my-0 mr-1 md:size-5 xl:size-6" />
                    {tutor.hours} hours teaching students
                  </p>

                  <p className="flex text-xs font-medium md:text-sm xl:text-lg text-black/70 xl:pr-10 whitespace-nowrap md:whitespace-normal">
                    <IoLocationOutline className="my-auto md:my-0 mr-1 md:size-5 xl:size-6" />{" "}
                    {tutor.location}
                  </p>
                  <hr className="border-black/70 mt-3 border-t-[1px]" />
                </div>
                <hr className="w-72 md:hidden absolute bottom-0 left-0 border-black/70 border-t-[1px]" />
              </div>
              <div className="absolute -right-2 md:top-7 lg:top-6 md:right-1">
                <div className="relative space-y-2">
                  <div className="flex md:hidden mr-3 -mt-2">
                    <FaRegHeart className="size-4 md:size-5 xl:size-7" />
                  </div>
                  <button className="md:hidden absolute p-1 -bottom-12 text-base font-medium px-2 right-0 bg-[#056FD2] inline rounded-l-lg text-white">
                    Certified
                  </button>
                  <button className="md:hidden absolute p-1 -bottom-[95px] text-base font-medium right-0 text-right inline rounded-l-lg bg-[#60AD56] text-white">
                    Math
                  </button>
                  <div className=" md:hidden absolute -bottom-[135px] ">
                    <img className="w-10 " src={whatapp} alt="whatsapp" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs xl:text-base font-normal w-60 md:w-full">
                {" "}
                Your First Lesson is Backed by our Good Fit Gurantee
              </p>
              <div className="md:flex py-2 md:justify-between">
                <h2 className="text-lg md:text-xl xl:text-2xl md:my-auto font-bold">
                  Hourly : ${tutor.price}
                </h2>
                <div className="my-auto hidden md:flex ">
                  <img
                    className="md:w-8 xl:w-10 "
                    src={whatapp}
                    alt="whatsapp"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-9/12">
            <div className="py-2 space-y-1 bg-white">
              <div>
                <div className="flex justify-between ">
                  <div className="my-auto">
                    <h2 className="text-[19px] md:text-xl xl:text-4xl font-semibold">
                      Excellent Tutor!
                    </h2>
                  </div>
                  <p className="text-lg md:text-xl xl:text-3xl font-medium">
                    <button className="p-1 px-2 text-xs md:text-base xl:text-xl font-semibold rounded-md bg-primary text-white">
                      Book Lesson
                    </button>
                  </p>
                </div>
                <div>
                  <p className="text-[9.73px] md:text-[13px] xl:text-lg text-black/60 font-normal">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between md:pr-14">
                  <div className="my-auto">
                    <h2 className="text-[19px] md:text-xl xl:text-4xl font-semibold">
                      About
                    </h2>
                  </div>
                  <img
                    className="w-7 h-4 md:w-9 md:h-6 my-auto"
                    src={flag}
                    alt="img"
                  />
                </div>
                <div>
                  <p className="text-[9.73px] md:text-[13px] xl:text-lg text-black/60 font-normal">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between md:pr-14">
                  <div className="my-auto">
                    <h2 className="text-[19px] md:text-xl xl:text-4xl font-semibold">
                      Education
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-[9.73px] md:text-[13px] xl:text-lg text-black/60 font-normal">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between md:pr-14">
                  <div className="my-auto">
                    <h2 className="text-[19px] md:text-xl xl:text-4xl font-semibold">
                      Polices
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-[9.73px] md:text-[13px] xl:text-lg text-black/60 font-normal">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between md:pr-14">
                  <div className="my-auto">
                    <h2 className="text-[19px] md:text-xl xl:text-4xl font-semibold">
                      Schedule
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-[9.73px] md:text-[13px] xl:text-lg text-black/60 font-normal">
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the.is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry&apos;s standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry&apos;s standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorDetails;
