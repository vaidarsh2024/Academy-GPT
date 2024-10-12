import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="bg-black px-2 py-5 lg:px-5 lg:py-7 text-white font-poppins">
        <div className="pt-1 lg:pt-3 ">
          <hr className="w-full border-t-[1px]  border-white" />
        </div>

        <div className="mt-3 lg:mt-5  px-1 md:px-2 lg:px-4 grid gap-2 grid-flow-col grid-cols-7 ">
          <div className="list-none  space-y-1 col-span-2 md:col-span-2">
            <h3 className="text-[5.5px] md:text-[12px] lg:text-base font-semibold">
              Reach us
            </h3>
            <li className="flex text-[4.89px]  md:text-[9px] lg:text-sm">
              <LuPhoneCall className="mr-2 my-auto size-2 md:size-4 lg:size-5" />
              +1012 3456 789
            </li>
            <li className="flex text-[4.89px] md:text-[9px] lg:text-sm">
              <MdEmail className="mr-2 my-auto size-2 md:size-4 lg:size-5" />
              demo@gmail.com
            </li>
            <li className="flex text-[4.89px] whitespace-nowrap md:text-[9px] lg:text-sm">
              <IoLocationSharp className="mr-2  size-[10px] md:size-4 lg:size-5" />
              132 Dartmouth Street Boston, <br /> Massachusetts 02156 United
              States
            </li>
          </div>
          <div className="list-none  space-y-1">
            <h3 className="text-[5.5px] md:text-[12px] lg:text-base font-semibold">
              Company
            </h3>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">About us</li>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">Contact</li>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">Blogs</li>
          </div>
          <div className="list-none  space-y-1">
            <h3 className="text-[5.5px] md:text-[12px] font-semibold lg:text-base">
              Legal
            </h3>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">
              Privacy Policy
            </li>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">
              Terms & Services
            </li>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">use</li>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">
              Refund Policy
            </li>
          </div>
          <div className="list-none  space-y-1">
            <h3 className="text-[5.5px] md:text-[12px] font-semibold lg:text-base">
              Quick Links
            </h3>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">
              Techlabz Keybox
            </li>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">
              Downloads
            </li>
            <li className="text-[4.89px] md:text-[9px] lg:text-sm">Forum</li>
          </div>
          <div className="p-[3px] md:p-2 lg:px-4 lg:py-3 bg-[#131313] rounded-md col-span-2 md:col-span-2">
            <h3 className="text-[5.5px] md:text-[12px] lg:text-base whitespace-nowrap font-semibold">
              Join Our Newsletter
            </h3>
            <div className="flex p-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="h-3 md:h-5 lg:h-8 w-full focus:outline-none  pl-[5px]  rounded-l-sm text-[3px] md:text-[5px] lg:text-xs bg-[#1E1E1E] placeholder:text-[#616161] placeholder:text-[3px] md:placeholder:text-[5px] lg:placeholder:text-xs"
              />
              <button className="w-full bg-black md:text-[7px] lg:text-xs rounded-r-sm text-[4px] font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-[4px] md:text-[8px] lg:text-sm font-manrope opacity-25">
              * Will send you weekly updates for your <br /> better tool
              management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
