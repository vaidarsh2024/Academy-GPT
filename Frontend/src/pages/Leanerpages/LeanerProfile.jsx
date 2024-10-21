import profileimg from "../../assets/Image/profile.png";
import { LiaCertificateSolid } from "react-icons/lia";
import flag from "../../assets/Image/UK Flag.png";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const LeanerProfile = () => {

    const navigate = useNavigate();


    const handleProfileAddClick = () => {
        navigate("leanerprofileadd");
    }

  return (
    <>
      <div className="font-urbanist">
        <div className="px-5 space-y-5 md:space-y-0 md:space-x-5 md:flex">
          <div className="border-2 p-3 drop-shadow-md rounded-lg h-fit md:w-4/6">
            <div className="flex space-x-3">
              <div className="w-2/6">
                <img
                  className="size-[120px] xl:size-48 rounded-md"
                  src={profileimg}
                  alt="profile-img"
                />
              </div>
              <div className="w-4/6">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-lg xl:text-2xl font-semibold">
                      Asad B.
                    </h1>
                  </div>
                  <div>
                    <button
                      onClick={handleProfileAddClick}
                      className="p-1 px-2 text-white rounded-md bg-primary text-xs md:text-sm xl:text-lg font-bold">
                      Edit Profile
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <LiaCertificateSolid className="size-6 xl:size-7 text-[#C1C1C1]" />
                  <p className="text-sm xl:text-base font-medium">
                    Your first lessons is backed by our <br />
                    <span className="text-primary">
                      Good Fit Guarantee
                    </span>{" "}
                  </p>
                </div>
                <div className="hidden md:flex">
                  <div className=" space-y-1">
                    <div className=" justify-between space-y-1">
                      <div className="flex space-x-2">
                        <MdEmail className="my-auto size-5 xl:size-6 text-[#C1C1C1] " />
                        <p className="font-medium text-[13px] xl:text-base">
                          123456@gmail.com
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <RiPhoneFill className="my-auto size-5 xl:size-6 text-[#C1C1C1] " />
                        <p className="font-medium text-[13px] xl:text-base">
                          123456789
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-5 justify-between">
                      <div className="flex space-x-2">
                        <MdLock className="my-auto size-5 xl:size-6 text-[#C1C1C1] " />
                        <p className="font-medium text-[13px] xl:text-base">
                          123***********231
                        </p>
                      </div>
                      <div className="flex  space-x-2 ">
                        <img
                          className=" md:w-7 md:h-4 xl:w-9 xl:h-6 my-auto"
                          src={flag}
                          alt="img"
                        />
                        <p className="font-medium text-[13px] xl:text-base">
                          English
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-t-2 md:hidden border-black/70 mt-2" />

            <div className="px-2 md:hidden space-y-2 pt-2">
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <MdEmail className="my-auto size-5 text-[#C1C1C1] " />
                  <p className="font-medium text-[13px]">123456@gmail.com</p>
                </div>
                <div className="flex space-x-2">
                  <MdLock className="my-auto size-5 text-[#C1C1C1] " />
                  <p className="font-medium text-[13px]">123***********231</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <RiPhoneFill className="my-auto size-5 text-[#C1C1C1] " />
                  <p className="font-medium text-[13px]">123456789</p>
                </div>
                <div className="flex  space-x-2 ">
                  <img
                    className="w-7 h-4 md:w-9 md:h-6 my-auto"
                    src={flag}
                    alt="img"
                  />
                  <p className="font-medium text-[13px]">English</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 p-3 drop-shadow-md rounded-lg md:w-3/6">
            <div>
              <h2 className="text-base md:text-lg  xl:text-xl font-semibold ">
                Basic Information
              </h2>
              <p className="text-[9.49px]  md:text-sm lg:text-base xl:text-lg text-black/80 font-normal ">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold md:text-lg xl:text-xl">
                Skill
              </h2>
              <p className="text-[9.49px] md:text-sm  lg:text-base xl:text-lg text-black/80 font-normal ">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div>
              <h2 className="text-base md:text-lg xl:text-xl font-semibold ">
                Education
              </h2>
              <p className="text-[9.49px] md:text-sm  lg:text-base xl:text-lg text-black/80  font-normal ">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div>
              <h2 className="text-base md:text-lg xl:text-xl font-semibold ">
                Goal
              </h2>
              <p className="text-[9.49px] md:text-sm  lg:text-base xl:text-lg text-black/80 font-normal ">
                is simply dummy text of the printing and typesetting industry.
                is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeanerProfile