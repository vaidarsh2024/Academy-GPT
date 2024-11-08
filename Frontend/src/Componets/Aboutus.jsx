import about1 from "../assets/Image/aboutimg1.jpg";
import about2 from "../assets/Image/aboutimg2.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        id="about-us"
        className="px-6 lg:px-14  lg:flex py-5 mt-8 font-urbanist">
        <div className="lg:w-3/6 space-y-3  lg:space-y-5 xl:space-y-8">
          <h3 className=" text-3xl lg:text-5xl text-primary font-bold">
            {t("About Us")}
          </h3>
          <h3 className=" text-3xl lg:text-5xl pr-5 lg:pr-20 font-bold text-[#141414] opacity-80 ">
            {t("About_Titel")}
          </h3>
          <p className="text-xs lg:text-lg lg:pr-7 font-normal text-[#1E1E1E]">
            {t("About_subtext_1")}
          </p>
          <p className="text-xs lg:text-lg lg:pr-8 font-normal text-[#1E1E1E]">
            {t("About_subtext_2")}
          </p>
          <button className="p-1 text-white bg-primary text-lg rounded-md  px-2">
            <Link to={"/applynow"}>{t("Apply Now")}</Link>
          </button>
        </div>
        <div className="lg:w-3/6 hidden lg:flex relative">
          <div className=" absolute right-0 ">
            <div className="relative ">
              <div className="relative  ">
                <img className="rounded-3xl w-96" src={about1} alt="img1" />
                <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
                <h2 className="text-4xl text-white absolute top-24 left-5 px-10 text-center font-bold">
                  {t("About_imgtext_1")}
                </h2>
              </div>
            </div>
          </div>
          <div className=" absolute  left-0 bottom-0">
            <div className=" relative">
              <img className=" rounded-3xl w-96  " src={about2} alt="img1" />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
              <h2 className="text-4xl text-white absolute  top-24 left-5 px-14 text-center  font-bold">
                {t("About_imgtext_2")} 
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus