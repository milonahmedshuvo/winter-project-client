import React, { useEffect } from "react";
import logo from "../../image/logo.png";
import {
  FaSistrix,
  FaRegUser,
  FaRegHeart,
  FaRegTrashAlt,
} from "react-icons/fa";
// import abc from '../../../public/fristproducts.json'
import "../../App.css";

const Navbar = () => {
  return (
    <div className="mt-[33px] ">
      <div className="flex justify-between flex-row  w-[1400px] mx-auto ">
        <div className="image">
          <img src={logo} alt="" className=" w-full md:w-[120px] h-[50px]" />
        </div>

        {/* search */}
        <div className="hidden md:block">
          <div className="search ml-[80px] flex  ">
            <input
              type="text"
              placeholder="Im looking for.."
              className=" pl-4 border w-[713px] h-[50px]  "
            />
            <div className="w-[65px]  bg-[#0198E9] h-[50px] flex justify-center items-center rounded-tr-[5px] rounded-br-[5px] ">
              <FaSistrix className="text-white text-2xl"></FaSistrix>
            </div>
          </div>
        </div>

        {/* icons  */}
        <div className="icons flex items-center ml-[85px] ">
          <div className="w-[73px] h-[24px] flex items-center ">
            <FaRegUser className="text-[#4C4C4C] text-[20px]"></FaRegUser>
            <p className="text-[#29292E] w-[43px] h-[19px] leading-[19px] styleFront text-[16px] ml-2">
              Login
            </p>
          </div>

          <div className="w-[91px] h-[24px] ml-[30px] flex items-center ">
            <FaRegHeart className="text-[#4D4D4D]  h-[18px] text-[33px]"></FaRegHeart>
            <p className="w-[61px] h-[19px] leading-[19px] styleFront text-[16px] text-[#4D4D4D] ">
              Wishlist
            </p>
          </div>

          <div className="w-[89px] h-[20px] ml-[40px] flex items-center ">
            <FaRegTrashAlt className="text-[23px] h-[20px] mr-1 text-[#4C4C4C]"></FaRegTrashAlt>
            <p className="w-[90px] h-[19px] ml-[3px] leading-[19px] styleFront text-[16px] text-[#4D4D4D]">
              My card
            </p>
          </div>

          <div className="w-[20px] h-[20px] ml-1 rounded-full flex justify-center items-center bg-[#FF5D5D] text-white">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
