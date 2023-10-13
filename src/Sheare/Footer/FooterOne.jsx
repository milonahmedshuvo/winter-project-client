import React from "react";
import shipping from "../../image/shipping.png";
import star from "../../image/star.png";
import retun from "../../image/return.png";
import payment from "../../image/payment.png";

const FooterOne = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row mt-20 justify-between mx-4">
      <div className="flex mt-5 ">
        <div>
          <img src={shipping} alt="" />
        </div>

        <div className="ml-2">
          <p className="text-[#333333] frontFive ">FREE SHIPPING</p>
          <p className="text-[#757575] text-[14px] styleFront">
            Order via Campaign
          </p>
        </div>
      </div>

      <div className="flex mt-5 ">
        <div>
          <img src={star} alt="" />
        </div>

        <div className="ml-2">
          <p className="text-[#333333] frontFive ">Best Price</p>
          <p className="text-[#757575] text-[14px] styleFront">
            Quality products
          </p>
        </div>
      </div>

      <div className="flex mt-5 ">
        <div>
          <img src={retun} alt="" />
        </div>

        <div className="ml-2">
          <p className="text-[#333333] frontFive ">Free Retern</p>
          <p className="text-[#757575] text-[14px] styleFront">
            Within 7 days returns
          </p>
        </div>
      </div>

      <div className="flex mt-5">
        <div>
          <img src={payment} alt="" />
        </div>

        <div className="ml-2">
          <p className="text-[#333333] frontFive ">Secure Payment</p>
          <p className="text-[#757575] text-[14px] styleFront">
            100% secure payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
