import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
// import fristProducts from '../../../fristproducts.json'
import data from "../../data";



const Products = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("../../../public/fristproducts.json")
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-16 mx-4">
      <p className="text-[16px] md:text-[26px] frontFive text-[#2E2E2E]"> Flash Deals</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-3">
        {data?.map((product) => (
          <SingleProduct key={product.id} product={product}>
            {" "}
          </SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
