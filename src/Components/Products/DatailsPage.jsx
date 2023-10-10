import React, { useContext, useState } from 'react'
import { MyContext } from '../../../Context'
import products from '../../data'
import { FaStar, FaRegHeart, FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';




const DatailsPage = () => {
const {valueOne} = useContext(MyContext)
console.log("ddddddd", valueOne)



const product = products?.find(pro => pro.id == valueOne)
console.log(product)
const {image, title,  discription, catagoryImage, price, option } = product


 const [images, setImage] = useState(image)



  return (
    <div>
      <h1>datails page</h1>  


          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>

              <div className="image border border-purple-400 w-full flex justify-between">
                   <div>
                    <img src={images} className='w-[519px] border border-[#F4F4F6]' alt="" />
                   </div>

                   <div className='mt-3 flex flex-col'>
                       {
                        catagoryImage.map((img, i) => <button onClick={() => setImage(img)} key={i} className='focus:border border-[#21A2F8]'>   <img src={img}  className='my-3  w-[104px] h-[104px] ' ></img>  </button> )
                       }
                   </div>
              </div>





              <div className="allDatails border border-green-300 w-[661px] pr-6">
                <p className='text-[26px] text-[#333333] frontFive ' >{title}</p>
                 <div className='flex justify-between items-center'>
                 <p className=" flex items-center my-2 ">
                  <p className='frontFive mr-1'>4.8</p>
          <FaStar className="text-[#FAC96B]"></FaStar>
          <FaStar className="text-[#FAC96B]"></FaStar>
          <FaStar className="text-[#FAC96B]"></FaStar>
          <FaStar className="text-[#FAC96B]"></FaStar>
          <FaStar className="text-[#D3D3D3]"></FaStar>
          <p className='text-[#BABABA] text-[18px] ml-1 '>(226)</p>
        </p>

        <p className='flex items-center'> <FaCheck className='text-green-400'></FaCheck> <span className='text-[14px] ml-2 text-[#333333] styleFront '> 4,320 sold</span> </p>
        <p className='flex items-center' > <FaRegHeart></FaRegHeart> <span className='text-[#0198E9] styleFront ml-4 '>Add to wishlist</span></p>
                 </div>


                  <div className="price mt-8 flex items-center">
                      <p className='text-[#0198E9] text-[30px]'>${price} 
                        
                      </p>
                      <p className='ml-4 line-through  text-[#8D8D8D]'>$1,020.99</p>
                  </div>

                  <div className="sku">
                    <p>
                    SKU: 12314124124
                    <span>In stock</span>
                    </p>
                  </div>


                  <div className="drescription">
                       <p>{discription}</p>
                  </div>

                  <div className="option ml-10">
                     {
                       option.map((list, i) => <ul style={{listStyleType: 'disc'}}
                       key={i}
                       >
                        <li> {list} </li>
                       </ul>)
                     }
                  </div>

              </div>
          </div>

    </div>
  )
}

export default DatailsPage
