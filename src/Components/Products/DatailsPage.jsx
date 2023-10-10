import React, { useContext } from 'react'
import { MyContext } from '../../../Context'
import products from '../../data'



const DatailsPage = () => {
const {valueOne} = useContext(MyContext)
console.log("ddddddd", valueOne)

const product = products.find(pro => pro.id == valueOne)
console.log(product)
const {image, title,  discription, catagoryImage, price, } = product

  return (
    <div>
      <h1>datails page</h1>  
    </div>
  )
}

export default DatailsPage
