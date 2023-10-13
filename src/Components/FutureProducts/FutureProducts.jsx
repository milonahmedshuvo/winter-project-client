import React from 'react'
import allProducts from "../../../AllProducts"
import OneProducts from './OneProducts'
import SingleProduct from '../Products/SingleProduct'

const FutureProducts = () => {
  return (
    <div className="mt-16 mx-4">
      <p className="text-[16px] md:text-[26px] frontFive text-[#2E2E2E]">Featured Product</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-3">
        {allProducts?.map((product) => (
          <OneProducts key={product.id} product={product}>
            {" "}
          </OneProducts>
        ))}
      </div>
    </div>
  )
}

export default FutureProducts
