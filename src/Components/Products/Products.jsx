import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
// import fristProducts from '../../../fristproducts.json'
import data from '../../data'


const Products = () => {
const [datas, setDatas] = useState([])

useEffect(()=> {
    fetch('../../../public/fristproducts.json')
    .then((res) => res.json())
    .then((data) => setDatas(data))
    .catch((err) => console.log(err))
},[])









  return (
    <div className='grid grid-cols-2 lg:grid-cols-4'>

        {
            data?.map((product) => <SingleProduct
            key={product.id}
            product={product}
            > </SingleProduct> )
        }
    </div>
  )
}

export default Products
