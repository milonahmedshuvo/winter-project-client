import React from "react";
import health from "../../image/health.png";
import { FaChevronRight } from "react-icons/fa";
import books from "../../image/books.png";
import groc from "../../image/groc.png";
import fastion from "../../image/fastion.png";
import home from "../../image/home.png";
import jowelly from "../../image/jowel.png";
import kids from "../../image/kids.png";
import leder from "../../image/leder.png";
import loods from "../../image/loods.png";
import man from "../../image/man.png";
import pet from "../../image/pet.png";
import seasonal from "../../image/seasonal.png";
import toys from "../../image/toys.png";
import watch from "../../image/watch.png";
import woman from "../../image/woman.png";

const Category = () => {
  return (
    <div className="mt-10 mx-4 md:mx-0 ">
      <h1 className="text-[26px] w-[152px] h-[39px] mb-7 frontFive text-[#383838] ">
        Category
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1  ">
        {/* item 1 */}
        <div className="drop-shadow-md">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={health} alt="" />
              <span className=" text-[14px] md:text-[16px] ml-3 styleFront ">
                Health & Household
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 2 */}
        <div className="drop-shadow-md">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={kids} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Kids Fashion
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 3 */}
        <div className="drop-shadow-md">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={toys} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Toys
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 4 */}
        <div className="drop-shadow-md">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={groc} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Groceries
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 5 */}
        <div className="drop-shadow-md">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={home} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Home & Lifestyle
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 6 */}
        <div className="drop-shadow-md mt-0 md:mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={man} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Men Fashion
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 7 */}
        <div className="drop-shadow-md mt-0 md:mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={woman} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Women’s Fashion
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 8 */}
        <div className="drop-shadow-md mt-0 md:mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={books} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Stationary & Books
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 9 */}
        <div className="drop-shadow-md mt-0 md:mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={leder} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Leather Goods
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 10 */}
        <div className="drop-shadow-md mt-0 md:mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={jowelly} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Jewelleries
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 11 */}
        <div className="drop-shadow-md mt-0 md:mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={watch} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Watches
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 12 */}
        <div className="drop-shadow-md mt-0 md:mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={fastion} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Men Fashion
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 13 */}
        <div className="drop-shadow-md mt-0 md:mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={loods} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Tools & Hardware
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>
        {/* item 14 */}
        <div className="drop-shadow-md mt-0 md:mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={pet} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Pet Supplies
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>

        {/* item 15*/}
        <div className="drop-shadow-md mt-2">
          <div className="flex justify-between items-center bg-[#FFFFFF] drop-shadow-md rounded-md  w-full h md:w-[270px] h-[65px]   ">
            <p className="flex items-center pl-3 ">
              <img src={seasonal} alt="" />
              <span className="text-[14px] md:text-[16px] ml-3 styleFront ">
                Seasonal
              </span>
            </p>

            <FaChevronRight className="text-[13px] mr-4 text-[#999999]"></FaChevronRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
