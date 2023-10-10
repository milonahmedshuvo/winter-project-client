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
    // <div className=" py-6 flex items-center bg-base-100">
    //   <div className="navbar-start md:w-1/12 ">
    //     <img src={logo} alt="" />
    //   </div>

    //   <div className="navbar-center  md:w-7/12 hidden lg:flex">
    //     <ul className=" w-full md:block  px-1">
    //       <div className=" flex  ">
    //         <input
    //           type="text"
    //           placeholder="Im looking for.."
    //           className=" py-3 bg-gray-50 md:w-11/12 border px-5 "
    //         />
    //         <div className=" md:w-1/12 bg-[#0198E9] px-1 py-3  flex justify-center items-center rounded-tr-[5px] rounded-br-[5px] ">
    //           <FaSistrix className="text-white text-2xl"></FaSistrix>
    //         </div>
    //       </div>
    //     </ul>
    //   </div>

    //   <div className="navbar-end md:w-3/12 text-[#4C4C4C]">
    //     <div className="icons flex gap-5 items-center ">
    //       <div className="flex gap-2  items-center ">
    //         <FaRegUser className=" text-2xl md:text-xl"></FaRegUser>
    //         <p className="hidden md:block">Login</p>
    //       </div>

    //       <div className="  flex gap-2 items-center ">
    //         <FaRegHeart className=" text-2xl md:text-xl"></FaRegHeart>
    //         <p className="hidden md:block">Wishlist</p>
    //       </div>

    //       <div className=" flex gap-2 items-center ">
    //         <FaRegTrashAlt className=" text-2xl md:text-xl"></FaRegTrashAlt>
    //         <p className="hidden md:block">My card</p>
    //       </div>

    //      <div className="hidden md:block">
    //      <div className="w-4 h-4 rounded-full flex justify-center items-center bg-[#FF5D5D] text-white">
    //         1
    //       </div>
    //      </div>
    //     </div>
    //   </div>
    // </div>




    <div className="mt-[33px] mx-4 md:mx-0 ">
      <div className="flex  justify-between ">
        <div className="image  ">
          <img src={logo} alt="" className=" w-full xl:w-[120px] h-[50px]" />
        </div>

        {/* search */}

        <div className="hidden md:block ">
          <div className="search ml-0 xl:ml-[40px] flex  ">
            <input
              type="text"
              placeholder="Im looking for.."
              className=" pl-4 border w-full  xl:w-[713px] h-[50px]"
            />
            <div className="w-[65px]  bg-[#0198E9] h-[50px] flex justify-center items-center rounded-tr-[5px] rounded-br-[5px] ">
              <FaSistrix className="text-white text-2xl"></FaSistrix>
            </div>
          </div>
        </div>

        {/* icons  */}
        <div className="icons flex items-center ml-0 lg:ml-[85px] ">
          <div className=" w-5 md:w-[73px] h-[24px] flex items-center ">
            <FaRegUser className="text-[#4C4C4C] text-[20px]"></FaRegUser>
            <p className="text-[#29292E] w-[43px] h-[19px] leading-[19px] styleFront text-[16px] ml-2 hidden md:block">
              Login
            </p>
          </div>

          <div className=" w-5 md:w-[91px] h-[24px] ml-[30px] flex items-center ">
            <FaRegHeart className="text-[#4D4D4D]  h-[20px] text-[23px]"></FaRegHeart>
            <p className="w-[61px] h-[19px] leading-[19px] styleFront text-[16px] text-[#4D4D4D] hidden md:block">
              Wishlist
            </p>
          </div>

          <div className="w-5 md:w-[89px] h-[20px] ml-[30px] md:ml-[40px] flex items-center ">
            <FaRegTrashAlt className="text-[23px] h-[20px] mr-1 text-[#4C4C4C]"></FaRegTrashAlt>
            <p className="w-[90px] h-[19px] ml-[3px] leading-[19px] styleFront text-[16px] text-[#4D4D4D] hidden md:block">
              My card
            </p>
          </div>

          <div className="hidden md:block" >
            <div className="w-[20px] h-[20px] ml-1 rounded-full flex justify-center items-center bg-[#FF5D5D] text-white ">
              1
            </div>
          </div>
        </div>
      </div>

      {/* mobile secrent  */}
      <div className=" md:hidden mt-[12px] md:mt-0 sm:block">
        <div className="search flex  ">
          <input
            type="text"
            placeholder="Im looking for.."
            className=" pl-4 border w-full h-[40px]"
          />
          <div className="w-[55px]  bg-[#0198E9] h-[40px] flex justify-center items-center rounded-tr-[5px] rounded-br-[5px] ">
            <FaSistrix className="text-white text-2xl"></FaSistrix>
          </div>
        </div>
      </div>

        {/* namubar list  */}
        <div className="grid grid-cols-3 gap-5  border-b pb-1  lg:grid-cols-7 mt-[24px]">
            <p className="text-center frontFive text-[14px] md:text-[16px] text-[#333333] " >Women's Fashion</p>
            <p className="text-center frontFive text-[14px] md:text-[16px] text-[#333333] " >Women's Fashion</p>
            <p className="text-center frontFive text-[14px] md:text-[16px] text-[#333333] " >Women's Fashion</p>
            <p className="text-center frontFive text-[14px] md:text-[16px] text-[#333333] hidden md:block " >Women's Fashion</p>
            <p className="text-center frontFive text-[14px] md:text-[16px] text-[#333333] hidden md:block " >Women's Fashion</p>
            <p className="text-center frontFive text-[14px] md:text-[16px] text-[#333333] hidden md:block " >Women's Fashion</p>
            <p className="text-center frontFive text-[14px] md:text-[16px] text-[#333333] hidden md:block " >Women's Fashion</p>
            
            
        </div>

    </div>
  );
};

export default Navbar;
