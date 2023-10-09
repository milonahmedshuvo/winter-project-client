import React, { useContext } from 'react'
import { FaStar, FaRegHeart } from "react-icons/fa";
import basket from '../../image/basket.png'
import { Link } from 'react-router-dom';
import { MyContext } from '../../../Context';



const SingleProduct = ({product}) => {
const {setValueOne} = useContext(MyContext)
 const {image, title, price, id} = product;

  return (
    <div className='border my-14 border-[##E9E9E9] rounded w-[332px] h-[469px] p-1 relative ' >
       <Link to={`/productDatails/${id}`} onClick={() =>setValueOne(id)} >
       <div className='relative'>
            <img className='h-[313px] w-full rounded' src={image} alt="" />

            <FaRegHeart className='text-[30px] text-[#999999] absolute top-4 right-3'></FaRegHeart>
        </div>
       </Link>

        <p className='w-24 flex my-2 '>
        <FaStar className='text-[#FAC96B]' ></FaStar> 
        <FaStar className='text-[#FAC96B]' ></FaStar> 
        <FaStar className='text-[#FAC96B]' ></FaStar> 
        <FaStar className='text-[#FAC96B]' ></FaStar> 
        <FaStar className='text-[#D3D3D3]' ></FaStar> 
          
          
        </p>
        <p className='text-[#383838] text-[18px] styleFront' >{title}</p>

        <div className='absolute bottom-3'>
        <div className='grid grid-cols-2'>
            <p className='text-[22px] text-[#0970CD] frontFive ' >${price}</p>
            <p className='w-6 mx-[129px]' >  <img src={basket} alt="" /></p>
        </div>
        </div>
    </div>
  )
}

export default SingleProduct
