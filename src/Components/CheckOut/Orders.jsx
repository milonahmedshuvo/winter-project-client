import React from 'react'
import { FaTrash, FaPlus, FaRegWindowMinimize } from "react-icons/fa";
import watch from "../../image/smart.png";
import chair from "../../image/chair.png";
import female from "../../image/female.png";
import { Link } from "react-router-dom";
import bikash from "../../image/bikash.png"
import nogot from "../../image/nogot.png"
import roket from "../../image/roket.png"
import delivery from "../../image/delivery.png"





const Orders = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10 bg-[#F9F9F9] mx-4">
      <div className="w-full md:w-8/12 lg:w-9/12 px-7 py-3 ">


      <div className='border-b-2'>
      <p className='text-[30px] text-[#414B56] font-serif'>Shipping Details</p>
      </div>

      <p className='uppercase text-[20px] mt-6 '>Contact Information</p>



         <div className='flex flex-col md:flex-row gap-8 mt-6 '>

            <div className='w-full'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '>FIRST NAME</p>
                <input type="text" className='border w-full py-3' />
            </div>

            <div className='w-full'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '>LAST NAME</p>
                <input type="text" className='border w-full py-3' />
            </div>


         </div>





         <div className='flex flex-col md:flex-row gap-8 mt-3 '>

            <div className='w-full'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '>EMAIL ADDRESS</p>
                <input type="email" className='border w-full py-3' />
            </div>

            <div className='w-full'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '>MOBILE NUMBER *</p>
                <input type="text" className='border w-full py-3' />
            </div>


         </div>



         <p className='uppercase text-[20px] mt-10 '>Shipping Address</p>


         <div className='w-full mt-5'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '>Address Line 1  *</p>
                <input type="email" className='border w-full py-3' />
            </div>


            <div className='w-full mt-3'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '>Address Line 2  *</p>
                <input type="email" className='border w-full py-3' />
            </div>



            <div className='flex flex-col md:flex-row gap-8 mt-3 '>

            <div className='w-full'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '>Country  *</p>
                <input type="email" defaultValue="Select Country" className='border w-full py-3 text-[#636363]' />
            </div>

            <div className='w-full'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '>City/Area  *</p>
                <input type='text'  defaultValue='Select City or Area' className='border w-full py-3 text-[#636363]' />
            </div>


         </div>




         <div className='flex flex-col md:flex-row gap-8 mt-3 '>

            <div className='w-full'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '>Select at district, state of province</p>
                <input type="email" className='border w-full py-3' />
            </div>

            <div className='w-full'>
                <p className='text-[#636363] text-[14] styleFront mb-2 '> Postal Code  *</p>
                <input type="text" className='border w-full py-3' />
            </div>


         </div>


         <div className='flex my-12'>
            <input type="checkbox" name="" className='w-[27px] h-[27px] bg-blue-300' id="" />
            <p className='text-[#333333] text-[18px] styleFront ml-4 '>Add to address book</p>
         </div>



      </div>

      {/* card  */}
      <div className="bg-[#FFFFFF] shadow w-full md:w-4/12 lg:w-3/12 px-6 py-3 h-[500px]  ">
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

        <div className="flex justify-between items-center mt-5 border-b-2 pb-4">
          <span className="text-[#8D8D8D] text-[18px] frontFive">
            Order Total{" "}
          </span>
          <span className="text-[#0198E9] text-[24px] frontFive">
            ৳1,956.66
          </span>
        </div>


        <div className='flex justify-between items-center mt-6'>
        <div className='flex items-center'>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1" className='text-[#757575] ml-2  '> Cash on delivery</label>
        </div>
        <img src={delivery} alt="" />
        </div>


        <div className='flex justify-between items-center mt-3'>
        <div className='flex items-center'>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1" className='text-[#757575] ml-2  '> Pay with Bkash</label>
        </div>
        <img src={bikash} alt="" />
        </div>

        <div className='flex justify-between items-center mt-3'>
        <div className='flex items-center'>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1" className='text-[#757575] ml-2  '> Pay with Nagad</label>
        </div>
        <img src={nogot} alt="" />
        </div>

        <div className='flex justify-between items-center mt-3'>
        <div className='flex items-center'>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1" className='text-[#757575] ml-2  '> Pay with Rocket</label>
        </div>
        <img src={roket} alt="" />
        </div>


        <Link to="/orders" >
        <input
          className="w-full bg-[#0198E9] mt-6 py-1 rounded text-white"
          type="button"
          value="PLACE ORDER"
        />
        </Link>

        
      </div>
    </div>
  )
}

export default Orders
