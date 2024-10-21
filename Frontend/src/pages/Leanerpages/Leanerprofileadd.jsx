import { MdCameraAlt } from "react-icons/md";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import PropTypes from "prop-types";
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


const Leanerprofileadd = () => {

  const navigate = useNavigate();


 const [selectedLanguages, setSelectedLanguages] = useState([
   initialLanguages[0],
 ]);
 const [languages, setLanguages] = useState(initialLanguages);



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

const handleLanguageChange = (newValue) => {
  setSelectedLanguages(newValue);
};

const handleLanguageCreate = (inputValue) => {
  const newLanguage = { value: inputValue.toLowerCase(), label: inputValue };
  setLanguages([...languages, newLanguage]);
  setSelectedLanguages([...selectedLanguages, newLanguage]);
};

  const handleProfileClick = () => {


    
    navigate("/leanernavbar/leanerprofile");
  };



  return (
    <>
      <div>
        <div className="px-10 pt-10 lg:pt-0 xl:px-20 my-auto space-y-3 xl:space-y-5">
          <div className="space-y-2">
            <div className="flex justify-center">
              <div className=" bg-[#A39494] p-2 rounded-full ">
                <MdCameraAlt className="size-8 md:size-10 xl:size-12" />
              </div>
            </div>
            <p className="text-center text-primary">
              Upload Photo ( Optional )
            </p>
          </div>

          <div className="md:flex space-y-3 md:space-y-0 md:space-x-3 xl:space-x-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border-[1px] border-black/70 rounded-md focus:outline-primary"
            />
            <input
              type="text"
              name="basicinformation"
              id="basicinformation"
              placeholder="Basic Information"
              className="w-full p-2 border-[1px] border-black/70 rounded-md focus:outline-primary"
            />
          </div>

          <div className="md:flex space-y-3 md:space-y-0 md:space-x-3 xl:space-x-5">
            <input
              type="text"
              placeholder="Skill"
              className="w-full p-2 border-[1px] border-black/70 rounded-md focus:outline-primary"
            />
            <input
              type="text"
              name="Education"
              id="Education"
              placeholder="Education"
              className="w-full p-2 border-[1px] border-black/70 rounded-md focus:outline-primary"
            />
          </div>

          <div className="md:flex space-y-3 md:space-y-0 md:space-x-3 xl:space-x-5">
            <input
              type="text"
              placeholder="Goals"
              className="w-full p-2 border-[1px] border-black/70 rounded-md focus:outline-primary"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 border-[1px] border-black/70 rounded-md focus:outline-primary"
            />
          </div>

          <div className="md:flex space-y-3 md:space-y-0 md:space-x-3 xl:space-x-5">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="Phone no"
              className="w-full p-2 border-[1px] border-black/70 rounded-md focus:outline-primary"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="New Password"
              className="w-full p-2 border-[1px] border-black/70 rounded-md focus:outline-primary"
            />
          </div>

          <div className="md:flex space-y-3 md:space-y-0 md:space-x-3 xl:space-x-5">
            <div className="relative md:w-1/2">
              <CreatableSelect
                isMulti
                className="border-[1px] w-full md:w-full border-black rounded-md"
                options={languages}
                value={selectedLanguages}
                onChange={handleLanguageChange}
                onCreateOption={handleLanguageCreate} // Allow creating new languages
                components={{
                  Option: customOption,
                  SingleValue: customSingleValue,
                }}
              />
            </div>
            <button
              onClick={handleProfileClick}
              className="p-2 text-center  md:w-1/2 text-white bg-primary w-full rounded-md">
              Add Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leanerprofileadd;
