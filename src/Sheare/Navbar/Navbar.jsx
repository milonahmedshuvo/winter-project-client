import React, { useEffect } from "react";
import logo from '../../image/logo.png'
import { FaSistrix, FaRegUser,FaRegHeart,FaRegTrashAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="mt-[33px] border-red-400 border">
         <div className="flex" >
               <div className="image">
                <img src={logo} alt="" className="w-[120px] h-[50px]" />
               </div>

               {/* search */}
               <div className="search flex">
               <input type="text" placeholder="Im looking for.." className=" border w-[713px] h-[50px]  " />
               <div className="w-[65px] bg-[#0198E9] h-[50px] flex justify-center items-center rounded-tr-[5px] rounded-br-[5px] ">
                <FaSistrix className='text-white text-2xl'></FaSistrix>
               </div>
               </div>

               {/* icons  */}
               <div className="icons flex ">
                 <div className="w-[73px] h-[24px] flex items-center bg-red-400" >
                  <FaRegUser></FaRegUser>
                  <p>Login</p>
                 </div>

                 <div className="w-[91px] h-[24px] flex items-center bg-green-300">
                  <FaRegHeart></FaRegHeart>
                  <p>Wishlist</p>
                 </div>

                 <div className="w-[80px] h-[20px] flex items-center bg-yellow-300">
                  <FaRegTrashAlt></FaRegTrashAlt>
                  <p>My card</p>
                 </div>
               </div>


         </div>
    </div>
  );
};

export default Navbar;
