import React, { useContext, useState } from "react";
import { MyContext } from "../../../Context";
import products from "../../../AllProducts";
import maduin from "../../image/maduin.png";
import reveria from "../../image/reveria.png";
import samantha from "../../image/samantha.png";
import vanille from "../../image/vanille.png";



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
import { useNavigate } from "react-router-dom";

const DatailsPage = () => {
  const { valueOne } = useContext(MyContext);
  console.log("ddddddd", valueOne);

  const product = products?.find((pro) => pro.id == valueOne);
  console.log(product);
  const { image, title, discription, catagoryImage, price, option } = product;

  const [images, setImage] = useState(image);

  return (
    <div className="mx-4">
      <p className="mt-4 mb-6">
        {" "}
        <span className="font-[600]">Home ></span>{" "}
        <span className="font-[600]"> Men’s fashion ></span> Men's Stand Collar
        Leather Jacket{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-10 md:gap-1 lg:gap-6  ">
        <div className="image  w-full flex  lg:justify-between ">
          <div className="w-5/6">
            <img
              src={images}
              className=" w-full  lg:w-[519px] border border-[#F4F4F6]"
              alt=""
            />

            <div className="flex items-center mt-4 ">
              <p className="text-[#333333] text-[20px] styleFront ">Shere</p>

              <p className="w-[44px] h-[44px] bg-[#E2ECEF] rounded-full flex justify-center items-center ml-3 ">
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

              <p className="w-[44px] h-[44px] bg-[#FBE5D9] rounded-full flex justify-center items-center  ml-3 ">
                <FaHive className="text-[#FF7020] h-[19px] w-[19px]"></FaHive>
              </p>
            </div>
          </div>

          <div className=" mt-0 xl:mt-2   flex flex-col   ">
            {catagoryImage.map((img, i) => (
              <button
                onClick={() => setImage(img)}
                key={i}
                className="focus:border border-[#21A2F8]"
              >
                {" "}
                <img
                  src={img}
                  className="my-3 w-[104px] lg:h-[104px] "
                ></img>{" "}
              </button>
            ))}
          </div>
        </div>

        <div className="allDatails w-full md:w-5/6 lg:w-[661px] pr-6">
          <p className="text-[26px] text-[#333333] frontFive ">{title}</p>
          <div className="flex  justify-between items-center">
            <p className=" flex items-center my-2 ">
              <p className="frontFive mr-1">4.8</p>
              <FaStar className="text-[#FAC96B]"></FaStar>
              <FaStar className="text-[#FAC96B]"></FaStar>
              <FaStar className="text-[#FAC96B]"></FaStar>
              <FaStar className="text-[#FAC96B]"></FaStar>
              <FaStar className="text-[#D3D3D3]"></FaStar>
              <p className="text-[#BABABA] text-[18px] ml-1 ">(226)</p>
            </p>

            <p className="flex items-center">
              {" "}
              <FaCheck className="text-green-400"></FaCheck>{" "}
              <span className="text-[14px] ml-2 text-[#333333] styleFront ">
                {" "}
                4,320 sold
              </span>{" "}
            </p>
            <p className="flex items-center ">
              {" "}
              <FaRegHeart></FaRegHeart>{" "}
              <span className="text-[#0198E9] styleFront ml-2 ">
                Add to wishlist
              </span>
            </p>
          </div>

          <div className="price mt-8 flex items-center">
            <p className="text-[#0198E9] text-[30px]">${price}</p>
            <p className="ml-4 line-through  text-[#8D8D8D]">$1,020.99</p>
          </div>

          <div className="sku flex items-center mt-2 ">
            <p className="text-[#757575] styleFront text-[16px]">
              SKU: 12314124124
            </p>

            <p className="flex items-center ml-2">
              <div className="h-[10px] w-[10px]  text-white rounded-full flex items-center bg-[#3AB137]">
                <FaCheck className="text-[7px] "></FaCheck>
              </div>

              <span className="text-[#757575] ml-1 styleFront ">In stock</span>
            </p>
          </div>

          <div className="drescription text-[#333333] styleFront leading-[30px] md:text-[14px] lg:text-[18px] mt-6 ">
            <p>{discription}</p>
          </div>

          <div className="option ml-10 mt-8">
            {option.map((list, i) => (
              <ul
                className="text-[#333333] md:text-[14px] lg:text-[16px] mt-1 styleFront "
                style={{ listStyleType: "disc" }}
                key={i}
              >
                <li> {list} </li>
              </ul>
            ))}
          </div>

          <p className="w-[357px] h-[29px] flex justify-between mt-6 ">
            <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[14px] rounded  w-[33px] h-[29px]  flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] ">
              size
            </p>

            <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px] h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] ">
              S
            </p>

            <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded bg-[#0198E9] w-[33px]  h-[29px] flex items-center justify-center mr-3  text-white ">
              M
            </p>
            <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px] h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] ">
              L
            </p>

            <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px] h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] ">
              X
            </p>

            <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px] h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] ">
              XL
            </p>
            <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px]  h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] ">
              XXL
            </p>
          </p>

          <p className="flex justify-start items-center  w-full  xl:w-[600px] mt-6 ">
            <p className="flex items-center">
              <span className="text-[14px] text-[#3D3D3F] styleFront mr-1">
                Quantity:{" "}
              </span>

              <p className="flex items-center justify-start">
                <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px]  h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] ">
                  <FaRegWindowMinimize></FaRegWindowMinimize>
                </p>
                <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px]  h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] ">
                  2
                </p>

                <p className="border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px]  h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] ">
                  <FaPlus></FaPlus>
                </p>
              </p>
            </p>

            <div className="flex  gap-3 lg:gap-1 xl:gap-5">
              <input
                type="button"
                className="text-[#FFFFFF] p-1 md:text-[10px] lg:text-[16px] frontFive w-full lg:w-[165px] h-full lg:h-[35px] bg-[#0198E9] rounded "
                value="Add to card"
              />

              <input
                type="button"
                className="text-[#0198E9] p-1 md:text-[10px] lg:text-[16px] frontFive w-full lg:w-[165px] h-full lg:h-[35px] border border-[#0198E9] rounded"
                value="Add to card"
              />
            </div>
          </p>
        </div>
      </div>

      {/* datails page text  */}

      <div className="prodcutDescription mt-20">
        <h1 className="text-[#0198E9] frontFive text-[24px] ">
          Producr details of LED Monitor With High Quality In The World
        </h1>

        <div className="size mt-8">
          <p className="text-[#333333] frontSix mb-5 ">
            See the best picture no matter where you sit
          </p>

          <div className=" flex  flex-col md:flex-row items-center  ">
            <div className="sizeOne w-full xl:w-[608px] h-[204px] ml-10 md:ml-10 ">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-[#333333] styleFront "
              >
                <li>Size : M, L, XL</li>
                <li>Product Type : Jogger</li>
                <li>Main Material : Cotton</li>
                <li>Gender : Male</li>
                <li>Waist : Mid-rise</li>
                <li>Zip : Fly</li>
              </ul>
            </div>

            <div className="sizeTwo w-full xl:w-[608px] h-[204px] ml-10 md:ml-10  ">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-[#333333] styleFront "
              >
                <li>Zipper : Yes</li>
                <li>Pocket : Two front and One Back Pockets.</li>
                <li>100% Authentic Product</li>
                <li>Gender : Male</li>
                <li>
                  Product color may slightly vary due to our photography and
                  Sometimes it’s vary on our devices
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[#333333] frontSix mt-10">
            Powerful intelligence for perfection
          </p>

          <p className="text-[#333333] my-5 ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?{" "}
          </p>

          <p className="text-[#333333]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita
          </p>
        </div>

        <p className="w-[853px] h-[140px] flex items-center justify-start gap-4 my-10">
          <div>
            <p className="text-[#3D3D3F] frontFive ">Customer reviews</p>
            <p className=" flex items-center  ">
              <FaStar className="text-[#FAC96B]"></FaStar>
              <FaStar className="text-[#FAC96B]"></FaStar>
              <FaStar className="text-[#FAC96B]"></FaStar>
              <FaStar className="text-[#FAC96B]"></FaStar>
              <FaStar className="text-[#D3D3D3]"></FaStar>
              <p className="text-[#BABABA] text-[10px] xl:text-[18px] ml-1 ">
                {" "}
                4.6 out of 5{" "}
              </p>
            </p>
          </div>

          <div>
            <p className="flex items-center">
              <span className="mr-[2px]">5 stars</span>
              <span className=" w-[80px] md:w-[200px] h-[6px] bg-[#FFB340]">
                {" "}
              </span>
              <span className="ml-[2px]">79%</span>
            </p>

            <p className="flex items-center">
              <span className="mr-[2px]">5 stars</span>
              <span className=" w-[80px] md:w-[200px] h-[6px] bg-[#FFB340]">
                {" "}
              </span>
              <span className="ml-[2px]">60%</span>
            </p>

            <p className="flex items-center">
              <span className="mr-[2px]">5 stars</span>
              <span className=" w-[80px] md:w-[200px] h-[6px] bg-[#FFB340]">
                {" "}
              </span>
              <span className="ml-[2px]">40%</span>
            </p>

            <p className="flex items-center">
              <span className="mr-[2px]">5 stars</span>
              <span className=" w-[80px] md:w-[200px] h-[6px] bg-[#FFB340]">
                {" "}
              </span>
              <span className="ml-[2px]">39%</span>
            </p>
          </div>

          <div>
            <button className="text-white text-[8px] md:text-[15px] bg-[#0198E9] md:px-5 px-1 py-2 md:py-0 rounded">
              Write to Review
            </button>
          </div>
        </p>
      </div>

      <div className="">
        <p className="frontFive">Reviews (4) </p>

        <div className="reviewOne mt-5">
          <div className=" flex ">
            <div>
              <img src={vanille} alt="" />
            </div>

            <div className="ml-2">
              <span>vanille</span>
              <div className=" flex items-center  ">
                <FaStar className="text-[#FAC96B] "></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#D3D3D3] ml-2"></FaStar>
                <span className="text-[#BABABA] text-[10px] xl:text-[18px] ml-1 ">
                  {" "}
                  1 Month Ago{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="text-[#383838] styleFront my-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        {/* rivew two  */}
        <div className="reviewOne mt-5">
          <div className=" flex ">
            <div>
              <img src={maduin} alt="" />
            </div>

            <div className="ml-2">
              <span>vanille</span>
              <div className=" flex items-center  ">
                <FaStar className="text-[#FAC96B] "></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#D3D3D3] ml-2"></FaStar>
                <span className="text-[#BABABA] text-[10px] xl:text-[18px] ml-1 ">
                  {" "}
                  1 Month Ago{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="text-[#383838] styleFront my-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        {/* review tree */}
        <div className="reviewOne mt-5">
          <div className=" flex ">
            <div>
              <img src={samantha} alt="" />
            </div>

            <div className="ml-2">
              <span>vanille</span>
              <div className=" flex items-center  ">
                <FaStar className="text-[#FAC96B] "></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#D3D3D3] ml-2"></FaStar>
                <span className="text-[#BABABA] text-[10px] xl:text-[18px] ml-1 ">
                  {" "}
                  1 Month Ago{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="text-[#383838] styleFront my-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        {/* review four  */}
        <div className="reviewOne mt-5">
          <div className=" flex ">
            <div>
              <img src={reveria} alt="" />
            </div>

            <div className="ml-2">
              <span>vanille</span>
              <div className=" flex items-center  ">
                <FaStar className="text-[#FAC96B] "></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#FAC96B] ml-2"></FaStar>
                <FaStar className="text-[#D3D3D3] ml-2"></FaStar>
                <span className="text-[#BABABA] text-[10px] xl:text-[18px] ml-1 ">
                  {" "}
                  1 Month Ago{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="text-[#383838] styleFront my-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        {/* input filed  */}

        <div className=" w-full lg:w-[745px]  my-10">
          <div className="text">
            <h4 className="text-[#383838] frontSix ">Add Your Review</h4>
            <p className="text-[#A7A7A7] styleFront mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>

          <div className="my-5">
            <p className="text-[#383838] styleFront ">Name *</p>
            <input type="text" className="border w-full mt-2 py-1" />
          </div>

          <div className="my-3">
            <p className="text-[#383838] styleFront ">Email *</p>
            <input type="text" className="border w-full mt-2 py-1" />
          </div>

          <div className="my-3">
            <p className="text-[#383838] styleFront ">Review *</p>
            <input type="text" className="border w-full mt-2 py-7" />
          </div>

          <div className=" flex items-center md:hidden lg:hidden   mt-7  ">
            <p className="text-[#383838] frontFive ">Rating</p>
            <FaStar className="text-[#FAC96B] ml-2 "></FaStar>
            <FaStar className="text-[#FAC96B] ml-2"></FaStar>
            <FaStar className="text-[#FAC96B] ml-2"></FaStar>
            <FaStar className="text-[#FAC96B] ml-2"></FaStar>
            <FaStar className="text-[#D3D3D3] ml-2"></FaStar>
          </div>

          <input
            type="button"
            className="text-white bg-[#0198E9] mt-8 p-1 md:text-[10px] lg:text-[16px] frontFive w-full md:w-[165px] h-full lg:h-[35px] border border-[#0198E9] rounded"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default DatailsPage;
