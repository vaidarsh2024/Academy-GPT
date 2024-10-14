import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons"; 
import logo from "../assets/Image/logo.png";
import { CgClose } from "react-icons/cg";
import LeanerDashboard from "../pages/LeanerDashboard";
import { GoDotFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import person from "../assets/image/person2.png";
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const LeanerNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [activeComponent, setActiveComponent] = useState("DASHBOARD"); 
  const navigate = useNavigate();
  // Toggle the mobile drawer
  const toggleDrawer = () => setCollapsed(!collapsed);

  // Menu items
  const menuItems = [
    { label: "DASHBOARD", key: "DASHBOARD" },
    { label: "ONE ON ONE", key: "ONE_ON_ONE" },
    { label: "GROUP (4)", key: "GROUP_4" },
    { label: "GROUP (4+)", key: "GROUP_4_PLUS" },
    { label: "LEARNER QUESTIONS", key: "LEARNER_QUESTIONS" },
    { label: "ASK QUESTION", key: "ASK_QUESTION" },
    { label: "CONTACT", key: "CONTACT" },
    { label: "REVIEW", key: "REVIEW" },
    { label: "FAQ", key: "FAQ" },
  ];

  // Render content based on selected menu
  const renderComponent = () => {
    switch (activeComponent) {
      case "DASHBOARD":
        return (
          <div >
            <LeanerDashboard />
          </div>
        );
      case "ONE_ON_ONE":
        return <div>One on One Component</div>;
      case "GROUP_4":
        return <div>Group (4) Component</div>;
      case "GROUP_4_PLUS":
        return <div>Group (4+) Component</div>;
      case "LEARNER_QUESTIONS":
        return <div>One on One Component</div>;
      case "ASK_QUESTION":
        return <div>One on One Component</div>;
      case "CONTACT":
        return <div>One on One Component</div>;
      case "REVIEW":
        return <div>One on One Component</div>;
      case "FAQ":
        return <div>One on One Component</div>;
      default:
        return <div>Select a menu item</div>;
    }
  };


  const handellogout = () => {
    navigate("/")
  };

  return (
    <div className="flex font-urbanist">
      {/* Sidebar for large screens */}
      <aside className="hidden lg:flex flex-col w-64 h-screen bg-black text-white fixed">
        {/* Logo Section */}
        <div className="p-6 text-center">
          <img src={logo} alt="Logo" className="mx-auto w-28" />
        </div>

        {/* Menu Items */}
        <div className="flex-1">
          <ul className="space-y-1 text-center  ">
            <div className="px-10 space-y-2 font-semibold">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className={`cursor-pointer p-2 ${
                    activeComponent === item.key
                      ? "bg-primary relative rounded-md text-white "
                      : ""
                  }    transition-all`}
                  onClick={() => setActiveComponent(item.key)}>
                  {activeComponent === item.key && (
                    <span className="absolute -left-10 rounded-r-xl top-0 bottom-0 w-1 bg-primary"></span>
                  )}
                  {item.label}
                </li>
              ))}
            </div>
          </ul>
        </div>

        {/* Logout Button */}
        <div onClick={handellogout}
         className="px-12 p-4">
          <button className="bg-primary font-semibold w-full text-white py-2 rounded-md ">
            Logout
          </button>
        </div>
      </aside>

      {/* Drawer for mobile/tablet */}
      <div className="lg:hidden fixed top-6 px-5 left-0 w-full z-50  bg-black text-white flex items-center justify-between p-2">
        <div className="items-center">
          <img src={logo} alt="Logo" className="w-24 md:w-28 h-8" />
        </div>
        <div className=" flex space-x-4">
          <img
            src={person}
            alt="User"
            className="w-9 h-9 my-auto rounded-full"
          />
          <IoSearch className="my-auto mt-1" size={25} />
          <button onClick={toggleDrawer}>
            <MenuOutlined className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* Slide-out menu for mobile/tablet */}
      <div
        className={`${
          collapsed ? "hidden" : "block"
        } fixed inset-0 bg-white bg-opacity-75 z-40 lg:hidden`}
        onClick={toggleDrawer}>
        <div
          className="w-72  bg-black rounded-bl-[55px] p-6 absolute top-16 right-0 z-50"
          onClick={(e) => e.stopPropagation()}>
          <button
            onClick={toggleDrawer}
            className="border-2 rounded mx-auto  inline-flex">
            <CgClose className="flex bg-white" size={35} />
          </button>
          <ul className="mt-5 font-bold text-black  space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={`cursor-pointer list-disc list-inside bg-white px-4 p-1 ${
                  activeComponent === item.key
                    ? "bg-primary text-white relative"
                    : ""
                } hover:bg-primary  rounded-md transition-all`}
                onClick={() => {
                  setActiveComponent(item.key);
                  // Close the drawer on selection
                }}>
                {item.label}
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <button
            onClick={handellogout}
            className="bg-primary flex text-left p-2 font-bold  w-full mt-6 text-white py-2 rounded-md ">
            <GoDotFill className="my-auto mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content area with fixed user info and search bar */}

      <div className="ml-0 lg:ml-64 p-6 lg:w-full  relative">
        <div className="hidden lg:flex lg:absolute  drop-shadow-md top-0 left-0 lg:w-full bg-gray-100  z-10 p-4 items-center lg:justify-between">
          <div className="flex-1 relative mx-4">
            <input
              type="text"
              placeholder="Search"
              className=" lg:w-80 p-2 pl-12 bg-[#F5F6FA] placeholder:text-[#626264] focus:outline-primary border border-black/30 placeholder:font-medium rounded-3xl border-gray-300"
            />
            <IoSearch
              className="my-auto text-[#626264] absolute top-3 left-4"
              size={20}
            />
          </div>
          <div className="flex items-center">
            <img src={person} alt="User" className="w-11 h-11 rounded-full" />
            <div className="">
              <span className="px-2 text-base font-semibold">
                Esther Howard
              </span>
              <div className="px-2 flex justify-between">
                <p className=" font-medium text-black/70">Profile</p>
                <IoIosArrowDropdown className="my-auto text-black/70 size-6" />
              </div>
            </div>
          </div>
        </div>
        {/* Padding to account for fixed top */}
        <div className="mt-16 lg:p-6 ">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default LeanerNavbar;
