import React from "react";
import { FaTrash, FaPlus, FaRegWindowMinimize } from "react-icons/fa";
import watch from "../../image/smart.png";
import chair from "../../image/chair.png";
import female from "../../image/female.png";

const Checkout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10 bg-[#F9F9F9]">
      <div className="w-full md:w-8/12 lg:w-9/12 ">
        <div className="itemOne flex justify-between items-center bg-[#FFFFFF] px-5 h-[88px] shadow-sm py-2 ">
          <div className="flex">
            <input
              className="text-[#C4C4C4] w-[27px] h-[25px]"
              type="checkbox"
            />
            <p className="text-[16px] styleFront text-[#333333]  ml-4 ">
              Select All
            </p>
          </div>

          <div>
            <p className="flex items-center">
              {" "}
              <FaTrash className="text-[#A4A4A4] mr-1"></FaTrash>{" "}
              <span className="text-[#A4A4A4] frontFive text-[16px] ">
                Remove
              </span>
            </p>
          </div>
        </div>

        {/* item two  */}
        <div className="itemTwo my-6 px-5 flex justify-between  bg-[#FFFFFF] shadow-sm py-2 ">
          <div className="flex items-center">
            <input
              className="text-[#C4C4C4] h-[25px] w-[25px] mr-8"
              type="checkbox"
            />

            <div className="flex">
              <img className="w-[130px] h-[130px]" src={watch} alt="" />

              <div className="ml-3">
                <p className="text-[#333333] text-[16px] md:text-[18px] frontFive ">
                  Headrest Executive Mesh Office Chair set
                </p>
                <p className="text-[#0198E9] text-[15px] md:text-[20px] frontSix">
                  ৳976.33
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-evenly ">
            <p className="text-[#4D4D4D] text-[15px] md:text-[18px] styleFront">
              SKU: 33564333
            </p>

            <div className="flex items-center">
              <div className="flex justify-evenly rounded items-center h-[36px] w-[80px] border mr-2">
                <FaRegWindowMinimize className="text-[#D8D8D8] "></FaRegWindowMinimize>
                <span className="text-[#D8D8D8] "> 1 </span>
                <FaPlus className="text-[#D8D8D8] "></FaPlus>
              </div>

              <div className="w-[37px] h-[36px] rounded border flex items-center justify-center">
                <FaTrash className="text-[#A4A4A4]"></FaTrash>
              </div>
            </div>
          </div>
        </div>

        {/* tree item  */}
        <div className="itemTwo my-6 px-5 flex justify-between  bg-[#FFFFFF] shadow-sm py-2 ">
          <div className="flex items-center">
            <input
              className="text-[#C4C4C4] h-[25px] w-[25px] mr-8"
              type="checkbox"
            />

            <div className="flex">
              <img className="w-[130px] h-[130px]" src={chair} alt="" />

              <div className="ml-3">
                <p className="text-[#333333] text-[16px] md:text-[18px] frontFive ">
                  Headrest Executive Mesh Office Chair set
                </p>
                <p className="text-[#0198E9] text-[15px] md:text-[20px] frontSix">
                  ৳976.33
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-evenly ">
            <p className="text-[#4D4D4D] text-[15px] md:text-[18px] styleFront">
              SKU: 33564333
            </p>

            <div className="flex items-center">
              <div className="flex justify-evenly rounded items-center h-[36px] w-[80px] border mr-2">
                <FaRegWindowMinimize className="text-[#D8D8D8] "></FaRegWindowMinimize>
                <span className="text-[#D8D8D8] "> 1 </span>
                <FaPlus className="text-[#D8D8D8] "></FaPlus>
              </div>

              <div className="w-[37px] h-[36px] rounded border flex items-center justify-center">
                <FaTrash className="text-[#A4A4A4]"></FaTrash>
              </div>
            </div>
          </div>
        </div>

        {/* four item */}

        <div className="itemTwo my-6 px-5 flex justify-between  bg-[#FFFFFF] shadow-sm py-2 ">
          <div className="flex items-center">
            <input
              className="text-[#C4C4C4] h-[25px] w-[25px] mr-8"
              type="checkbox"
            />

            <div className="flex">
              <img className="w-[130px] h-[130px]" src={female} alt="" />

              <div className="ml-3">
                <p className="text-[#333333] text-[16px] md:text-[18px] frontFive ">
                  Headrest Executive Mesh Office Chair set
                </p>
                <p className="text-[#0198E9] text-[15px] md:text-[20px] frontSix">
                  ৳976.33
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-evenly ">
            <p className="text-[#4D4D4D] text-[15px] md:text-[18px] styleFront">
              SKU: 33564333
            </p>

            <div className="flex items-center">
              <div className="flex justify-evenly rounded items-center h-[36px] w-[80px] border mr-2">
                <FaRegWindowMinimize className="text-[#D8D8D8] "></FaRegWindowMinimize>
                <span className="text-[#D8D8D8] "> 1 </span>
                <FaPlus className="text-[#D8D8D8] "></FaPlus>
              </div>

              <div className="w-[37px] h-[36px] rounded border flex items-center justify-center">
                <FaTrash className="text-[#A4A4A4]"></FaTrash>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card  */}
      <div className="bg-[#FFFFFF] shadow w-full md:w-4/12 lg:w-3/12 px-6 py-3  ">
        <p className="text-[#333333] text-[20px] frontFive ">My Orders</p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-[#8D8D8D] text-[18px] styleFront">
            Subtotal
          </span>
          <span className="text-[#333333] text-[18px] frontFive">
            ৳1,952.66
          </span>
        </div>

        <div className="flex justify-between items-center mt-3 border-b-2 pb-5">
          <span className="text-[#8D8D8D] text-[18px] styleFront">
            Free Shipping{" "}
          </span>
          <span className="text-[#333333] text-[18px] frontFive">৳0</span>
        </div>

        <div className="flex justify-between items-center mt-5 ">
          <span className="text-[#8D8D8D] text-[18px] frontFive">
            Order Total{" "}
          </span>
          <span className="text-[#0198E9] text-[24px] frontFive">
            ৳1,956.66
          </span>
        </div>

        <input
          className="w-full bg-[#0198E9] mt-6 py-1 rounded text-white"
          type="button"
          value="Proceed to Checkout"
        />
      </div>
    </div>
  );
};

export default Checkout;
