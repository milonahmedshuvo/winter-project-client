import React from "react";
import logo from "../../image/logo.png";
import phone from "../../image/phone.png";
import {
  FaStar,
  FaRegHeart,
  FaCheck,
  FaRegWindowMinimize,
  FaPlus,
  FaWhatsapp,
  FaHive,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const FooterTwo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-14 mx-4 ">
      <div className="divOne">
        <div>
          <img src={logo} alt="" />
          <p className="text-[#C2C2C2] styleFront mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex items-center mt-4 ">
            <p className="w-[44px] h-[44px] bg-[#E2ECEF] rounded-full flex justify-center items-center  ">
              <FaLinkedin className="text-[#268AA9] h-[19px] w-[19px]"></FaLinkedin>
            </p>

            <p className="w-[44px] h-[44px] bg-[#E1F4F6] rounded-full flex justify-center items-center  ml-3 ">
              <FaTwitter className="text-[#53D1E2] h-[19px] w-[19px]"></FaTwitter>
            </p>

            <p className="w-[44px] h-[44px] bg-[#DFEAF5] rounded-full flex justify-center items-center  ml-3 ">
              <FaFacebookF className="text-[#2C94EA] h-[19px] w-[19px]"></FaFacebookF>
            </p>

            <p className="w-[44px] h-[44px] bg-[#3AB13726] rounded-full flex justify-center items-center  ml-3 ">
              <FaWhatsapp className="text-[#3AB137] h-[19px] w-[19px]"></FaWhatsapp>
            </p>
          </div>
        </div>
      </div>

      <div className="divTwo flex flex-col">
        <span className="text-[#333333] text-[18px] frontFive ">
          QUICK LINKS
        </span>
        <span className="text-[#C2C2C2] styleFront mt-8">About us</span>
        <span className="text-[#C2C2C2] styleFront mt-2">Contact us</span>
        <span className="text-[#C2C2C2] styleFront mt-2">Products</span>
        <span className="text-[#C2C2C2] styleFront mt-2">Login</span>
        <span className="text-[#C2C2C2] styleFront mt-2">Sign Up</span>
      </div>

      <div className="divTree flex flex-col">
        <span className="text-[#333333] text-[18px] frontFive">
          CUSTOMER AREA
        </span>
        <span className="text-[#C2C2C2] styleFront mt-8">My Account</span>
        <span className="text-[#C2C2C2] styleFront mt-2">Orders</span>
        <span className="text-[#C2C2C2] styleFront mt-2">Teams</span>
        <span className="text-[#C2C2C2] styleFront mt-2">Login</span>
        <span className="text-[#C2C2C2] styleFront mt-2">
          Shipping information
        </span>
      </div>

      <div className="divFour">
        <p className="text-[#333333] text-[18px] frontFive">CONTACT</p>
        <p className="text-[#C2C2C2] styleFront mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor{" "}
        </p>

        <div className="flex mt-8">
          <div>
            <img src={phone} alt="" />
          </div>

          <div className="ml-2">
            <p className="styleFront">Have any question?</p>
            <p className="text-[#0198E9] frontSix">099 456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
