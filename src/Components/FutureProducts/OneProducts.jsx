import React, { useContext } from 'react'
import { MyContext } from '../../../Context';
import { FaStar, FaRegHeart } from "react-icons/fa";
import basket from "../../image/basket.png";
import { Link } from "react-router-dom";




const OneProducts = ({product}) => {
    const { setValueOne } = useContext(MyContext);
  const { image, title, price, id } = product;



  return (
    <div className="border  mt-5 border-[##E9E9E9] rounded w-full md:w-[332px] h-[469px] p-1 flex flex-col justify-between ">
    <div>
      <Link to={`/futureProdcutDatails/${id}`} onClick={() => setValueOne(id)}>
        <div className="relative">
          <img className="h-[313px] w-full rounded" src={image} alt="" />

          <FaRegHeart className=" text-[22px] md:text-[30px] text-[#999999] absolute top-4 right-3"></FaRegHeart>
        </div>
      </Link>

      <p className="w-24 flex my-2 ">
        <FaStar className="text-[#FAC96B]"></FaStar>
        <FaStar className="text-[#FAC96B]"></FaStar>
        <FaStar className="text-[#FAC96B]"></FaStar>
        <FaStar className="text-[#FAC96B]"></FaStar>
        <FaStar className="text-[#D3D3D3]"></FaStar>
      </p>
      <p className="text-[#383838] text-[14px] md:text-[18px] styleFront">
        {title}
      </p>
    </div>

    

    <div className="flex justify-between w-full ">
      <p className=" text-[16px] md:text-[22px] text-[#0970CD] frontFive ">${price}</p>
      <p className=" w-5 md:w-6">
        
        <img src={basket} alt="" />
      </p>
    </div>
  </div>
  )
}

export default OneProducts
