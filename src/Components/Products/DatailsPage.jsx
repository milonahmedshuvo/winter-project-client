import React, { useContext, useState } from 'react'
import { MyContext } from '../../../Context'
import products from '../../data'
import { FaStar, FaRegHeart, FaCheck, FaRegWindowMinimize, FaPlus, FaWhatsapp,FaHive, FaLinkedin,FaTwitter, FaFacebookF } from "react-icons/fa";
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
     

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>

              <div className="image border border-purple-400 w-full flex justify-between">
                   <div>
                    <img src={images} className='w-[519px] border border-[#F4F4F6]' alt="" />
                    
                      <div className='flex items-center mt-4 '>
                         <p className='text-[#333333] text-[20px] styleFront '>Shere</p>

                         <p className='w-[44px] h-[44px] bg-[#E2ECEF] rounded-full flex justify-center items-center ml-3 ' >
                          <FaLinkedin className='text-[#268AA9] h-[19px] w-[19px]'></FaLinkedin>
                         </p>

                         <p className='w-[44px] h-[44px] bg-[#E1F4F6] rounded-full flex justify-center items-center  ml-3 ' >
                          <FaTwitter className='text-[#53D1E2] h-[19px] w-[19px]'></FaTwitter>
                         </p>

                         <p className='w-[44px] h-[44px] bg-[#DFEAF5] rounded-full flex justify-center items-center  ml-3 ' >
                          <FaFacebookF className='text-[#2C94EA] h-[19px] w-[19px]'></FaFacebookF>
                         </p>

                         <p className='w-[44px] h-[44px] bg-[#3AB13726] rounded-full flex justify-center items-center  ml-3 ' >
                          <FaWhatsapp className='text-[#3AB137] h-[19px] w-[19px]'></FaWhatsapp>
                         </p>

                         <p className='w-[44px] h-[44px] bg-[#FBE5D9] rounded-full flex justify-center items-center  ml-3 ' >
                          <FaHive className='text-[#FF7020] h-[19px] w-[19px]'></FaHive>
                         </p>
                      </div>

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
        <p className='flex items-center' > <FaRegHeart></FaRegHeart> <span className='text-[#0198E9] styleFront ml-2 '>Add to wishlist</span></p>
                 </div>


                  <div className="price mt-8 flex items-center">
                      <p className='text-[#0198E9] text-[30px]'>${price} 
                        
                      </p>
                      <p className='ml-4 line-through  text-[#8D8D8D]'>$1,020.99</p>
                  </div>

                  <div className="sku flex items-center mt-2 ">
                    <p className='text-[#757575] styleFront text-[16px]'>
                    SKU: 12314124124
            
                    </p>
                    
                    <p className='flex items-center ml-2'>
                      <div className='h-[10px] w-[10px]  text-white rounded-full flex items-center bg-[#3AB137]'>
                      <FaCheck className='text-[7px] '></FaCheck>
                      </div>
                   
                    <span className='text-[#757575] ml-1 styleFront '>In stock</span>
                    </p>

                  </div>


                  <div className="drescription text-[#333333] styleFront leading-[30px] text-[18px] mt-6 ">
                       <p>{discription}</p>
                  </div>

                  <div className="option ml-10 mt-8">
                     {
                       option.map((list, i) => <ul className='text-[#333333] text-[16px] mt-1 styleFront ' style={{listStyleType: 'disc'}}
                       key={i}
                       >
                        <li> {list} </li>
                       </ul>)
                     }
                  </div>

                  <p className='w-[357px] h-[29px] flex justify-between mt-6 '>
                      <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[14px] rounded  w-[33px] h-[29px]  flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] '>
                        size
                      </p>

                      <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px] h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] '>
                        S
                      </p>

                      <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded bg-[#0198E9] w-[33px]  h-[29px] flex items-center justify-center mr-3  text-white '>
                        M
                      </p>
                      <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px] h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] '>
                        L
                      </p>

                      <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px] h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] '>
                        X
                      </p>

                      <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px] h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] '>
                        XL
                      </p>
                      <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px]  h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] '>
                        XXL
                      </p>
                  </p>



                  <p className='flex justify-start items-center w-[600px] mt-6 '>

                      <p className='flex items-center'>
                        <span className='text-[14px] text-[#3D3D3F] styleFront mr-1'>Quantity: </span>


                        <p className='flex items-center justify-start'>

                          
                          <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px]  h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] '>
                          <FaRegWindowMinimize></FaRegWindowMinimize>
                        </p>
                        <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px]  h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] '>
                         2
                        </p>
                        
                        <p className='border border-[ #EAEAEA] p-[4px, 13px, 4px, 13px] text-[9px] rounded w-[33px]  h-[29px] flex items-center justify-center mr-3 text-[#6E6E6F] bg-[#FFFFFF] '>
                        <FaPlus></FaPlus> 
                        </p>

                        

                        </p>

                      </p>



                      <div className='flex gap-5'>
                        <input type="button" className='text-[#FFFFFF] text-[16px] frontFive w-[165px] h-[35px] bg-[#0198E9] rounded ' value="Add to card" />
                        
                        <input type="button" className='text-[#0198E9] text-[16px] frontFive w-[165px] h-[35px] border border-[#0198E9] rounded' value="Add to card" />
                      </div>




                  </p>


              </div>
          </div>

    </div>
  )
}

export default DatailsPage
