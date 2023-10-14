import React from "react";
import one from "../../image/one.png";
import two from "../../image/two.png";
import tree from "../../image/tree.png";

const Bannar = () => {
  return (
    <div className="flex gap-2 mx-4 md:mx-0 mt-5">
      <div className="relative">
        <img src={one} alt="" />
        <button className="bg-[#0198E9] w-[99px] h-[24px] md:w-[139px] md:h-[44px] frontSix text-[#FFFFFF] text-[12px] md:text-[16px] ss rounded absolute bottom-16 left-10 md:bottom-28 md:left-16 ">
          Shop Now
        </button>
      </div>

      <div className="flex flex-col justify-between ">
        <div className="hidden lg:block">
          <img src={two} alt="" />
        </div>

        <div className="hidden lg:block">
          <img src={tree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bannar;
