import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable"; // Import CreatableSelect
import LoginNavbar from "../Componets/loginNavbar";
import facebook from "../assets/Image/facebook.png";
import google from "../assets/Image/google.png";
import apple from "../assets/Image/apple.png";
import signupImage from "../assets/Image/Sign up.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// Languages
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
  // Add more languages as needed
];

const SignupPages = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [phone, setPhone] = useState(""); // State for phone number
  const [selectedLanguages, setSelectedLanguages] = useState([
    initialLanguages[0],
  ]); 
  const [languages, setLanguages] = useState(initialLanguages); // List of languages (including new ones)
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSignup = () => {
    navigate("/leanernavbar");
  };

  // Custom option for language dropdown
  const customOption = (props) => (
    <div {...props.innerProps} className="flex items-center p-2 cursor-pointer">
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

  // Custom single value for selected languages
  const customSingleValue = (props) => (
    <div className="flex items-center">
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
          <h2 className="text-center text-4xl font-bold">SIGN UP</h2>
          <p className="text-center text-black/70 text-lg">
            Create your personal account.
          </p>

          <form className="py-5 space-y-4">
            {/* Name Fields */}
            <div className="lg:flex lg:space-x-3 space-y-3 lg:space-y-0">
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
            </div>

            {/* Email and Phone Number Fields */}
            <div className="lg:flex lg:space-x-3 space-y-3 lg:space-y-0">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 pl-5 border border-black rounded-lg focus:outline-primary"
              />
              {/* Phone Number with Country Code */}
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
                containerStyle:focus ={{
                  outline: "1px solid #FF8000",
                }}
              />
            </div>

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
                placeholder="Password"
              />
            </div>

            <div className="relative mt-1">
              {confirmPasswordVisible ? (
                <AiOutlineEye
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  size={20}
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  size={20}
                />
              )}
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                className="w-full p-2 pl-5 border border-black rounded-lg focus:outline-primary"
                placeholder="Confirm Password"
              />
            </div>

            
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
                <span className="text-primary">language(s)</span> for lessons.
              </p>
            </div>

            {/* Terms and Conditions */}
            <p className="text-sm pb-2">
              <input type="checkbox" name="terms" id="terms" className="mr-2" />
              I agree to all the <span className="text-primary">terms</span> and{" "}
              <span className="text-primary">privacy policies</span>.
            </p>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSignup}
              className="p-2 w-full text-2xl font-bold rounded-md text-white bg-primary">
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="hidden lg:block text-center text-sm font-medium">
            Already have an account?{" "}
            <span className="text-primary">
              <Link to="/loginpage">Login</Link>
            </span>
          </p>

          {/* Divider */}
          <div className="flex py-3 items-center">
            <hr className="w-1/2 border-t border-gray-400" />
            <p className="text-sm px-2 whitespace-nowrap">Or Sign Up with</p>
            <hr className="w-1/2 border-t border-gray-400" />
          </div>

          {/* Social Media Buttons */}
          <div className="flex space-x-3">
            <button className="p-3 w-full flex justify-center border border-black rounded-md">
              <img className="w-6" src={facebook} alt="Facebook" />
            </button>
            <button className="p-3 w-full flex justify-center border border-black rounded-md">
              <img className="w-6" src={google} alt="Google" />
            </button>
            <button className="p-3 w-full flex justify-center border border-black rounded-md">
              <img className="w-6" src={apple} alt="Apple" />
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden lg:flex lg:w-1/2 mx-auto lg:my-auto">
          <div className="mx-auto flex justify-center">
            <img
              className="lg:max-h-[540px] xl:min-h-full"
              src={signupImage}
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
    </>
  );
};

export default SignupPages;
