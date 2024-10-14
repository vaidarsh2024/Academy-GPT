
import  { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import LoginNavbar from "../Componets/loginNavbar";
import Applynow from "../assets/image/Applynow.png"; 
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";



const initialLanguages = [
  {
    value: "en",
    label: "English",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    value: "es",
    label: "Spanish",
    flag: "https://flagcdn.com/es.svg",
  },
  {
    value: "fr",
    label: "French",
    flag: "https://flagcdn.com/fr.svg",
  },
];


  
const ApplyNowpage = () => {

const [passwordVisible, setPasswordVisible] = useState(false);
const [shownumbercode, setshownumbercode] = useState(false);
const [phone, setPhone] = useState("");
 const [selectedLanguages, setSelectedLanguages] = useState([
   initialLanguages[0],
 ]);
 const [languages, setLanguages] = useState(initialLanguages);
  const navigate = useNavigate();



const togglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};

const handleshownumbercode = () => {
    setshownumbercode(true);
};

 const handelopennav = () => {
   navigate("/leanernavbar");
 };



const customOption = (props) => (
  <div
    {...props.innerProps}
    className="flex items-center my-auto p-2 cursor-pointer ">
    <img src={props.data.flag} alt="" className="w-5 h-5 mr-2 rounded-md" />
    <span>{props.data.label}</span>
  </div>
);

customOption.propTypes = {
  innerProps: PropTypes.object.isRequired,
  data: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

const customSingleValue = (props) => (
  <div className="flex -mt-6 ml-2 border-[1px]  my-auto items-center">
    <img src={props.data.flag} alt="" className="w-5 h-5 mr-2 rounded-md" />
    <span>{props.data.label}</span>
  </div>
);

customSingleValue.propTypes = {
  data: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};



 const handleLanguageChange = (newValue, actionMeta) => {
   setSelectedLanguages(newValue);
 };

 const handleLanguageCreate = (inputValue) => {
   const newLanguage = { value: inputValue.toLowerCase(), label: inputValue };
   setLanguages([...languages, newLanguage]);
   setSelectedLanguages([...selectedLanguages, newLanguage]);
 };




  return (
    <>
      <LoginNavbar />
      <div className="lg:flex mt-8 px-8 xl:py-5 relative font-urbanist">
        {/* Left Side (Form) */}
        <div className="lg:w-1/2 md:px-16 lg:px-6 md:my-auto">
          <h2 className="text-center text-4xl xl:text-3xl font-bold">
            Apply Now
          </h2>
          <p className="text-center text-black/70 text-lg font-medium xl:text-2xl">
            To be listed on simex
          </p>

          <form className="py-5 space-y-4">
            {/* Name Fields */}

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full p-2 pl-5 border border-black rounded-lg focus:outline-primary"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-2 pl-5 border border-black rounded-lg focus:outline-primary"
            />

            {/* Contact Fields */}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 pl-5 border border-black rounded-lg focus:outline-primary"
            />

            {/* Password Fields */}
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
                className="w-full p-2 pl-5 border border-black rounded-lg focus:outline-primary"
                placeholder="Create Password"
              />
            </div>

            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              containerStyle={{
                width: "100%",
                height: "45px",
                border: "1px solid #000",
                borderRadius: ".3rem",
              }}
              containerStyle:focus={{
                outline: "1px solid #FF8000",
              }}
            />

            {/* Language Selector */}
            <div className="relative">
              <CreatableSelect
                isMulti
                className="border-[1px] w-72 lg:w-60 xl:w-72 border-black rounded-md"
                options={languages}
                value={selectedLanguages}
                onChange={handleLanguageChange}
                onCreateOption={handleLanguageCreate} // Allow creating new languages
                components={{
                  Option: customOption,
                  SingleValue: customSingleValue,
                }}
              />
              <p className="text-sm font-medium py-1">
                Select your preferred{" "}
                <span className="text-primary">language</span> for lessons.
              </p>
            </div>

            {/* Next Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleshownumbercode}
                className="p-2 w-full lg:w-72 flex justify-center text-2xl font-bold rounded-md text-white bg-primary">
                Next <IoIosArrowForward className="my-auto ml-3" />
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="hidden lg:block text-center text-sm font-medium">
            Already have an account?{" "}
            <span className="text-primary">
              <Link to="/loginpage">Login</Link>
            </span>
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden lg:flex lg:w-1/2 mx-auto lg:my-auto">
          <div className="mx-auto flex justify-center">
            <img
              className="lg:max-h-[560px] xl:min-h-full"
              src={Applynow}
              alt="Sign Up"
            />
          </div>
        </div>

        {/* Mobile Login Link */}
        <div className="lg:hidden py-5 left-0 right-0 bottom-0">
          <p className="text-center text-sm font-medium">
            Already have an account?{" "}
            <span className="text-primary">
              <Link to="/loginpage">Login</Link>
            </span>
          </p>
        </div>
      </div>

      {shownumbercode && (
        <div className="fixed top-0 left-0 w-full h-full font-urbanist px-10 bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 space-y-3 shadow-xl px-7 lg:w-5/12 xl:w-2/6">
            <h2 className="font-semibold text-center whitespace-nowrap text-2xl xl:text-[26px]">
              Enter Verification
              <br />
              Code Just Sent To Phone No
              <br />
              Address
            </h2>
            <input
              className="w-full p-2 pl-5 xl:p-3 border border-black rounded-lg focus:outline-primary"
              name="code"
              id="code"
              placeholder="Enter Verification code"
            />
            <div className="space-y-2">
              <button className="p-2 w-full flex justify-center text-lg xl:text-xl font-medium rounded-md  ">
                Resend Code
              </button>
              <button
                onClick={handelopennav}
                className="p-2 w-full  flex justify-center text-xl xl:text-2xl font-bold rounded-md text-white bg-primary">
                Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyNowpage